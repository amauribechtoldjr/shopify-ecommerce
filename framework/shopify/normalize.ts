import {
  Checkout,
  CheckoutLineItemEdge,
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  ProductVariantEdge,
  SelectedOption
} from '@framework/types'

import { Cart, LineItem } from '@common/types/cart'
import { Product } from '@common/types/product'

export function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc, ...rest } }) => ({
    url:
      process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
        ? `/images/${originalSrc}`
        : originalSrc ?? '/product-placeholder.svg',
    ...rest
  }))
}

export function normalizeProductPrice({ currencyCode, amount }: MoneyV2) {
  return {
    value: +amount,
    currencyCode
  }
}

export function normalizeProductOption({
  id,
  values,
  name: displayName
}: ProductOption) {
  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let valueNormalized: any = {
        label: value
      }

      if (displayName.match(/color?/gi)) {
        valueNormalized = { ...valueNormalized, hexColor: value }
      }

      return valueNormalized
    })
  }

  return normalized
}

export function normalizeProductVariant({ node }: ProductVariantEdge) {
  const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node

  return {
    id,
    name: title,
    sku: sku || id,
    price: +priceV2?.amount,
    listPrice: +compareAtPriceV2?.amount,
    requiresShipping: true,
    options: selectedOptions.map(({ name, value }: SelectedOption) => {
      const option = normalizeProductOption({
        id,
        name,
        values: [value]
      })

      return option
    })
  }
}

function getNormalizedOptionsIfExists(options: Array<ProductOption>) {
  if (!options) {
    return []
  }

  const normalizedOptions = options
    .filter(o => o.name !== 'Title')
    .map(o => normalizeProductOption(o))

  return normalizedOptions
}

function getNormalizedVariansIfExists(variants: ProductVariantConnection) {
  if (!variants?.edges) {
    return []
  }

  const normalizedVariants = variants.edges.map(e => normalizeProductVariant(e))

  return normalizedVariants
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: getNormalizedOptionsIfExists(options),
    variants: getNormalizedVariansIfExists(variants),
    ...rest
  }

  return product
}

export function normalizeCart(checkout: Checkout): Cart {
  return {
    id: checkout.id,
    createdAt: checkout.createdAt,
    completedAt: checkout.completedAt,
    currency: {
      code: checkout.totalPriceV2.currencyCode
    },
    taxesIncluded: checkout.taxesIncluded,
    lineItemsSubTotalPrie: +checkout.subtotalPriceV2.amount,
    totalPrice: checkout.totalPriceV2.amount,
    lineItems: checkout.lineItems?.edges?.map(normalizeLineItem),
    discounts: []
  }
}

const normalizeLineItem = ({
  node: { id, title, variant, ...rest }
}: CheckoutLineItemEdge): LineItem => {
  return {
    id,
    variantId: String(variant?.id),
    productId: String(variant?.id),
    name: title,
    path: variant?.product?.handle ?? '',
    discounts: [],
    options: variant?.selectedOptions?.map(
      ({ name, value }: SelectedOption) => {
        const option = normalizeProductOption({
          id,
          name,
          values: [value]
        })

        return option
      }
    ),
    variant: {
      id: String(variant?.id),
      sku: variant?.sku ?? '',
      name: variant?.title,
      image: {
        url:
          process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
            ? `/images/${variant?.image?.originalSrc}`
            : variant?.image?.originalSrc ?? '/product-placeholder.svg'
      },
      requiresShipping: variant?.requiresShipping ?? false,
      price: variant?.priceV2.amount,
      listPrice: variant?.compareAtPriceV2?.amount
    },
    ...rest
  }
}

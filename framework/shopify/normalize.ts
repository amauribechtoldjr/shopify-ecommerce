import { ImageEdge, Product as ShopifyProduct } from '@framework/types'
import { Product } from '@common/types/product'

export function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc, ...rest } }) => ({
    url: `/images/${originalSrc}`,
    ...rest
  }))
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
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
    ...rest
  }

  return product
}

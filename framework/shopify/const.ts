export const SHOPIFY_CHECKOUT_URL_COOKIE = 'shopify_checkoutUrl'

// Shpify rule is max 90 days
export const SHOPIFY_COOKIE_EXPIRE = 30

export const API_URL =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
    ? process.env.NEXT_PUBLIC_LOCAL_STORE_DOMAIN
    : process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN

export const SHOPIFY_CHECKOUT_ID_COOKIE =
  process.env.NEXT_PUBLIC_FRAMEWORK === 'shopify_local'
    ? 'shopify_local_checkoutId'
    : 'shopify_checkoutId'

import { SHOPIFY_CHECKOUT_URL_COOKIE_NAME } from '@framework/const'
import { NextApiRequest, NextApiResponse } from 'next'

export default function checkout(req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req

  const checkoutUrl = cookies[SHOPIFY_CHECKOUT_URL_COOKIE_NAME]

  if (checkoutUrl) {
    res.redirect(checkoutUrl)
  } else {
    res.redirect('/')
  }
}

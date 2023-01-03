import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'warmies-usa-wholesale-sandbox.myshopify.com',
    storefrontToken: '02dc553de565bdd258ec42ec05745375',
    privateStorefrontToken: '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',
    storefrontApiVersion: '2022-07',
    storefrontId: '1278141',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});

import * as Sentry from '@sentry/node'

process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
  
export default function App({ Component, pageProps, err }) {
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return <Component {...pageProps} err={err} />
}


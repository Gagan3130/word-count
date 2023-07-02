import getConfig from 'next/config';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import packageJSON from '../package.json';

const getDateInString = (dt = new Date()) => {
  let dts = dt.toString();
  dts = dts.substring(0, dts.indexOf('(') - 1);
  return dts;
};
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    const pageRenderTime = getDateInString(),
      buildOn = getDateInString(new Date(publicRuntimeConfig?.buildTime || ''));

    return (
      <Html lang="en">
        <Head>
          <style>
            {`
              img {
                max-width: 100%;
              }
            `}
          </style>
          <Script
            strategy="beforeInteractive"
            async
            type="text/javascript"
            src={`/static-assets/js/common.js`}
          ></Script>
        </Head>
        <body
          data-build-on={buildOn}
          data-render-at={pageRenderTime}
          data-version={packageJSON?.version}
        //   data-pkg-version={packageJSON.dependencies['@adani-digital/common']}
          data-aks-tag={process.env.AKS_TAG}
        >
          <noscript>
            <iframe
              title={'hidden'}
              sandbox={''}
            //   src={`https://www.googletagmanager.com/ns.html?id=${GTMID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

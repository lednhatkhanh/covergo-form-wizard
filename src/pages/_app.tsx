import { AppProps } from "next/app";
import Head from "next/head";
import "src/styles/index.scss";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Buy Insurance</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;

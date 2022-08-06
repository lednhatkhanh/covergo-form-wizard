import { AppProps } from "next/app";
import * as React from "react";
import "src/styles/index.css";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CustomApp;

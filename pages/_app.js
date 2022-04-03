import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/main.css";
import "../styles/astronaut.css";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2892433, 6);
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/neemble-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

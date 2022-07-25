// import { NextPage } from 'next';
// import { AppProps } from 'next/app';
// import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )

  return getLayout ( <Component {...pageProps} /> )

}

export default MyApp

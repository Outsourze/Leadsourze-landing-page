import Head from "next/head";
import Header from "./header";
import Footer from "./footer/footer" ;
import { oneSans, urban, jakarta } from '../utility/font';

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${oneSans.variable} ${urban.variable} ${jakarta.variable} w-full main-container`}>
        <Header />
        <main className='lg:pt-26 lg:pb-16 md:py-16 md:pb-5 max-md:py-16 max-sm:pb-2'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}


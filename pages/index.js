import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Mcqs_Home from '@/src/components/Mcqs_Home'
import Footer from '@/src/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  return (
    <>
      <Head>
        <title>PakMcqsHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div> 
          <Header />
          <Hero />
          <Mcqs_Home />
          {/* <Mcqs_Home2 /> */}
          {/* <Mcqs /> */}
          {/* <BreadCrumb /> */}
          <Footer />
        </div>
      </main>
    </>
  )
}

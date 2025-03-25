import { Inter, Plus_Jakarta_Sans, Poppins, Roboto } from 'next/font/google'
import './globals.css'
import favicon from '@/common/assets/images/logo.svg'
// import graphCardImage from '@/common/assets/images/about-us1.webp'
import Head from 'next/head'
import { ToastContainer, Zoom } from "react-toastify";
import Header from '@/common/components/header/header.component';
import Footer from '@/common/components/footer/footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap'
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
})

export const metadata = {
  title: {
    template: '%s | Hanna Health',
    default: 'Hanna Health'
  },
  description:
    'Hanna Health offers innovative, self-paced MSK solutions that enhance care access, empower members to manage pain, and reduce costs for health plans.',
  openGraph: {
    title: 'Revolutionizing Healthcare & Wellness',
    description:
      'Hanna Health offers innovative, self-paced MSK solutions that enhance care access, empower members to manage pain, and reduce costs for health plans.',
    url: 'https://dev.hannahealthhub.com/',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hanna Health',
    // images: [
    //   {
    //     url: graphCardImage.src,
    //     width: 500,
    //     height: 300
    //   }
    // ]
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: favicon.src
  }
}

export default function RootLayout ({
  children
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href={favicon.src} />
      </Head>
      <body className={`${plusJakartaSans.variable} ${poppins.variable} ${inter.variable} ${roboto.variable} antialiased`}>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
          theme="dark"
          transition={Zoom}
        />
        <Header />
        <main className='sm:px-5 px-2 mx-auto max-w-[1323px]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

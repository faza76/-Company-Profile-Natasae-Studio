
import { Inter } from "next/font/google";
import "./globals.css";
//Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTansition";
import Footer from "@/components/Footer";
import Head from "next/head";
import Whatsapp from "@/components/ui/whatsapp";


const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400" ,"500", "600", "700", "800"],
  variable: "--font-inter" });

export const metadata = {
  title: "Natasae Studio",
  description: "Jasa Desain Arsitektur dan Interior",
  openGraph: {
    title: "Natasae Studio",
    description: "Jasa Desain Arsitektur dan Interior",
    url:"https://devel.natasaestudio.com/",
    images: [
      {
        url: "https://devel.natasaestudio.com/preview.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://devel.natasaestudio.com/preview.png", // Must be an absolute URL
        width: 400,
        height: 300,
      },
      {
        url: "https://devel.natasaestudio.com/preview.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  }
};

export default function RootLayout({ children }) {


  return (
    
    <html lang="en">
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="This is a description of your website." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="This is a description of your website." />
        <meta property="og:image" content="/images/preview.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta name="twitter:description" content="This is a description of your website." />
        <meta name="twitter:image" content="/images/preview.jpg" />
      </Head>
      <body className={inter.className}>
      <Header />
      {/* <PageTransition>

      </PageTransition> */}
      {children}
      <Footer/>
      <Whatsapp />
      </body>
      
    </html>
  );
}

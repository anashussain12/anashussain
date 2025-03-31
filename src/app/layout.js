import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anas Hussain | Frontend Web Developer",
  description:
    "A Frontend Developer specializes in building visually appealing, user-friendly, and high-performance websites using modern web technologies. They focus on creating responsive designs, optimizing website speed, and improving user experience to enhance SEO (Search Engine Optimization) rankings.",
  keywords:
    "Frontend Developer, SEO Optimization, web development, Responsive Design, Mobile-Friendly Websites,User Interface (UI) Design,JavaScript Developer,React Developer,Next.js Developer,Web Performance Optimization,,Core Web Vitals,SEO Best Practices,HTML/CSS,Cross-Browser Compatibility,Page Load Speed,Search Engine Visibility,Structured Data,Meta Tags Implementation,JavaScript Frameworks,Accessibility Improvements,Front-End Development",
  authors: [{ name: "Anas Hussain", url: "https://anashussain.com" }],
  openGraph: {
    title: "Anas Hussain | Frontend Web Developer",
    description:
      "A Frontend Developer specializes in building visually appealing, user-friendly, and high-performance websites using modern web technologies. They focus on creating responsive designs, optimizing website speed, and improving user experience to enhance SEO (Search Engine Optimization) rankings.",
    url: "https://anashussain.com",
    siteName: "Anashussain",
    images: [
      {
        url: "https://anashussain.com/images/aitoolcity.png",
        width: 1200,
        height: 630,
        alt: "anashussain",
      },  
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Hussain | Frontend Web Developer",
    description: "A Frontend Developer specializes in building visually appealing, user-friendly, and high-performance websites using modern web technologies. They focus on creating responsive designs, optimizing website speed, and improving user experience to enhance SEO (Search Engine Optimization) rankings.",
    images: ["https://anashussain.com/images/aitoolcity.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9584165839000205"
          crossorigin="anonymous"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

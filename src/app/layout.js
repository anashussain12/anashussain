import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anas Hussain",
  description: "I am Frontend Next JS developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9584165839000205"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

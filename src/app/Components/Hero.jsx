"use client";
import { useEffect } from "react";
import Script from "next/script";

const Hero = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }
  }, []);

  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9584165839000205"
        crossOrigin="anonymous"
      />

      <div className="flex justify-center my-20 ">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9584165839000205"
          data-ad-slot="7184032042"
          data-ad-format="auto"
        ></ins>
      </div>
    </>
  );
};

export default Hero;

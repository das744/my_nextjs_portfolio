

import Hero from "@/components/Hero/Hero";
import Service from "../components//Service/Service";
import About from "../components//About/About";
import Skills from "../components/Skills/Skills"

import Portfolio from "../components/Portfolio/Portfolio"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Script from "next/script";

export const metadata = {
  title: "Web Developer in Melbourne- WDM | Web Design and Development",
  description: "Your Vision, Our Creation- Web Developer in Melbourne. Get an Affordable High-Performance Website which is Secure, Fast & User-Friendly!",
  keywords: [
    "Web Developer in Melbourne",
    " Website Developers Melbourne",
    " Website Development Melbourne",
 
    "Web Developer Near Me",
    "Website Designer Near Me",
   
  ],
  openGraph: {
    title: "Web Developer in Melbourne- WDM | Web Design and Development",
    description: "Get high-performance, SEO-optimised websites in Melbourne. Expert in Next.js, React, and mobile-friendly web development.",
    url: "https://webdeveloperinmelbourne.com.au",
    siteName: "Web Developer in Melbourne",
    images: [
      {
        url: "https://webdeveloperinmelbourne.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Developer in Melbourne",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer in Melbourne",
    description: "Need a professional web developer in Melbourne? Get a fast, SEO-friendly website today.",
    images: ["https://webdeveloperinmelbourne.com.au/og-image.jpg"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Web Developer in Melbourne",
        "url": "https://webdeveloperinmelbourne.com.au",
        "author": {
          "@type": "Person",
          "name": "Ajanta",
        },
        "description": "SEO-friendly website development services in Melbourne. Next.js expert for fast, responsive, and optimised websites.",
        "image": "https://webdeveloperinmelbourne.com.au/og-image.jpg",
      },
      {
        "@type": "WebPage",
        "name": "Web Developer in Melbourne (WDM) | Custom Websites & SEO Optimisation",
        "url": "https://webdeveloperinmelbourne.com.au",
        "description": "Looking for an expert web developer in Melbourne? We create SEO-friendly, fast, and responsive websites using Next.js.",
        "isPartOf": {
          "@type": "WebSite",
          "url": "https://webdeveloperinmelbourne.com.au",
        },
        "datePublished": "2024-02-07",
        "dateModified": "2024-02-07",
        "inLanguage": "en",
      }
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Main Components */}
      <Hero/>
      <Service/>
      <Skills/>
      <About />
      <Portfolio />
      <Contact />
      <Footer/>
    </>
  );
}

import About from "../components/About";

export const metadata = {
  title: "About Anas Hussain | Web Developer & Next.js Specialist",
  description:
    "Discover more about Anas Hussain — a dedicated web developer with expertise in React, Next.js, and modern web technologies. Learn about his background, experience, and education.",
  keywords: [
    "Anas Hussain",
    "About Anas Hussain",
    "Web Developer",
    "Next.js Developer",
    "Frontend Developer Portfolio",
    "React Developer",
  ],
  openGraph: {
    title: "About Anas Hussain | Web Developer & Next.js Specialist",
    description:
      "Explore Anas Hussain’s experience as a frontend developer skilled in React, Next.js, and Tailwind CSS.",
    url: "https://anashussain.com/about",
    type: "website",
    images: [
      {
        url: "https://anashussain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anas Hussain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anas Hussain | Web Developer & Next.js Specialist",
    description:
      "Explore Anas Hussain’s background in frontend development and his expertise in modern web frameworks.",
    images: ["https://anashussain.com/og-image.png"],
  },
};

export default function AboutPage() {
  return <About />;
  
}

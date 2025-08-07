import Projects from "../components/Projects";
export const metadata = {
  title: "Professional Web Development Projects | Anas Hussain",
  description:
    "Explore a portfolio of professional web development projects by Anas Hussain, including full-stack applications, admin dashboards, and responsive UI designs built with Next.js, Firebase, and Tailwind CSS.",

  keywords: [
    "Anas Hussain",
    "Web Developer Portfolio",
    "Next.js Projects",
    "Full Stack Developer",
    "Frontend Developer",
    "Tailwind CSS Portfolio",
    "Firebase Projects",
    "Admin Dashboard",
    "Modern Web Design",
    "Professional Projects",
  ],

  openGraph: {
    title: "Professional Web Development Projects | Anas Hussain",
    description:
      "Browse high-quality full-stack and front-end projects built with modern technologies like Next.js, Tailwind CSS, Firebase, and more. Created by web developer Anas Hussain.",
    url: "https://anashussain.com/projects",
    siteName: "Anas Hussain Portfolio",
    images: [
      {
        url: "https://anashussain.com/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Web Projects Portfolio by Anas Hussain",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Projects | Anas Hussain",
    description:
      "See full-stack and front-end projects crafted using Next.js, Firebase, Tailwind CSS, and more. Explore the portfolio of developer Anas Hussain.",
    images: ["https://anashussain.com/og-projects.jpg"],
  },
};
const page = () => {
  return (
    <>
    <Projects/>
    </>
  )
}

export default page

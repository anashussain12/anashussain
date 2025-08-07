import ContactForm from '../components/Contact';

export const metadata = {
  title: 'Contact | Anas Hussain - Web Developer & Designer',
  description:
    'Reach out to Anas Hussain for web development services, collaboration, freelance projects, or tech discussions. Let’s build something great together!',
  keywords: [
    'Contact Anas Hussain',
    'Web Developer Pakistan',
    'Freelance Web Designer',
    'Hire Front-end Developer',
    'Tech Collaboration',
    'Web Development Services',
    'Portfolio Contact Page',
    'Anas Hussain Contact',
  ],
  openGraph: {
    title: 'Contact | Anas Hussain - Web Developer & Designer',
    description:
      'Looking to work together or discuss your next big idea? Contact Anas Hussain to start a conversation about web development or tech collaboration.',
    url: 'https://anashussain.com/contact',
    siteName: 'Anas Hussain Portfolio',
    images: [
      {
        url: 'https://anashussain.com/og-projects.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Contact Anas Hussain',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Anas Hussain',
    description:
      'Start your project with Anas Hussain today. Get in touch via this simple contact form.',
    images: ['https://anashussain.com/og-contact.jpg'],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}

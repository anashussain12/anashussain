/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "imgs.search.brave.com",
      "w7.pngwing.com",
      "threejscc-portfolio.vercel.app",
      "static.vecteezy.com",
      "raw.githubusercontent.com",
      "cdn.jsdelivr.net",
      'upload.wikimedia.org',
      'img.icons8.com'
    ], // Add the external domain here
  },
};

export default nextConfig; // Use export default instead of module.exports

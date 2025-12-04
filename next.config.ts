/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Note: serving static files from the 'public' directory is a default behavior in Next.js.
  // This configuration is generally not needed but can help clarify intent or resolve specific
  // environment issues. We are ensuring the public directory is correctly handled.
  // Next.js automatically serves files from the 'public' directory at the root.
};

module.exports = nextConfig;

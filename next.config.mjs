// Static export: works on Vercel AND GitHub Pages. For a GitHub Pages project site
// (username.github.io/repo) build with NEXT_PUBLIC_BASE_PATH=/repo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default { output: "export", basePath, images: { unoptimized: true }, trailingSlash: true };

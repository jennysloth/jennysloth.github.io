import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jennysloth.com',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  redirects: {
    '/posts/': '/writing/',
    '/posts/2025/HelloWorld/': '/writing/hello-world/',
    '/posts/2025/September/': '/writing/2025-september/',
    '/posts/2025/October/': '/writing/2025-october/',
    '/cv/': '/resume/',
    '/courses/': '/notes/coursework/',
    '/teachings/coursework/': '/notes/coursework/',
    '/projects/portfolio-website/': '/projects/academic-portfolio-website/',
  },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});

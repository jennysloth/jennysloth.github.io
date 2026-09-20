import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const writing = await getCollection('writing', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => data.status === 'published');
  const items = [
    ...writing.map((item) => ({ title: item.data.title, description: item.data.description, pubDate: item.data.published, link: `/writing/${item.id}/` })),
    ...projects.map((item) => ({ title: item.data.title, description: item.data.description, pubDate: item.data.published, link: `/projects/${item.id}/` })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
  return rss({ title: 'Jennysloth', description: 'Notes, music, and ordinary days by Chen-Ling Lin.', site: context.site, items });
}

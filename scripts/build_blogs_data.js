const fs = require('fs');
const path = require('path');

function clean(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. EXTRACT BLOGS
const blogsDir = path.join(__dirname, '..', 'raw_audit', 'blogs');
const blogFiles = fs.readdirSync(blogsDir);
const blogs = [];

blogFiles.forEach(f => {
  const html = fs.readFileSync(path.join(blogsDir, f), 'utf8');
  const slug = f.replace('.html', '');
  
  const titleM = html.match(/<h1[^>]*class=["'][^"']*entry-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i) ||
                 html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleM ? clean(titleM[1].replace(/<[^>]+>/g, '')) : '';

  const dateM = html.match(/<time[^>]*datetime=["']([^"']*)["'][^>]*>([\s\S]*?)<\/time>/i);
  const date = dateM ? clean(dateM[2].replace(/<[^>]+>/g, '')) : '2026';

  const descM = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const description = descM ? clean(descM[1]) : '';

  // Extract entry-content
  let bodyContent = '';
  const contentM = html.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/article>/i) ||
                   html.match(/<div[^>]*class=["'][^"']*entry-content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
  if (contentM) {
    bodyContent = contentM[1]
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<div class=["']sharedaddy[\s\S]*?<\/div>/gi, '')
      .trim();
  }

  // Generate plain text excerpt
  const plainText = bodyContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const excerpt = plainText.slice(0, 200) + '...';

  blogs.push({
    slug,
    title,
    date,
    excerpt,
    description: description || excerpt,
    contentHtml: bodyContent,
    readTime: `${Math.max(3, Math.ceil(plainText.split(/\s+/).length / 200))} min read`
  });
});

// Write blogs.ts
const blogsTs = `export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  contentHtml: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(blogs, null, 2)};
`;

const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, 'blogs.ts'), blogsTs);
console.log(`Saved ${blogs.length} blogs to src/data/blogs.ts`);


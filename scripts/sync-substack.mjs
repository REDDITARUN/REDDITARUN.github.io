import fs from 'node:fs/promises';
import path from 'node:path';
import Parser from 'rss-parser';

const FEED_URL = 'https://teendifferent.substack.com/feed';
const OUTPUT_PATH = path.resolve(
  process.cwd(),
  'app/generated/substack-posts.json'
);
const MAX_POSTS = 10;

const parser = new Parser();
const REQUEST_HEADERS = {
  // Substack can reject generic CI user agents with 403.
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
  accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
};

function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getDescription(item) {
  return (
    stripHtml(item.contentSnippet) ||
    stripHtml(item.content) ||
    stripHtml(item.summary) ||
    'Read the full post on Substack.'
  );
}

async function syncSubstack() {
  try {
    const response = await fetch(FEED_URL, { headers: REQUEST_HEADERS });
    if (!response.ok) {
      throw new Error(`Feed request failed with status ${response.status}`);
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const posts = (feed.items ?? [])
      .filter((item) => item.link && item.title)
      .slice(0, MAX_POSTS)
      .map((item, index) => ({
        title: item.title.trim(),
        description: getDescription(item),
        link: item.link,
        uid: `blog-${MAX_POSTS - index}`,
      }));

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');

    console.log(`Synced ${posts.length} posts from ${FEED_URL}`);
  } catch (error) {
    console.error('Failed to sync Substack feed.', error);
    process.exit(1);
  }
}

syncSubstack();

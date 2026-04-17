import fs from 'node:fs/promises';
import path from 'node:path';
import Parser from 'rss-parser';

const FEED_URL = 'https://teendifferent.substack.com/feed';
const ARCHIVE_URL = 'https://teendifferent.substack.com/api/v1/archive?sort=new';
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

function formatPosts(items = []) {
  return items
    .filter((item) => item.link && item.title)
    .slice(0, MAX_POSTS)
    .map((item, index) => ({
      title: item.title.trim(),
      description: getDescription(item),
      link: item.link,
      uid: `blog-${MAX_POSTS - index}`,
    }));
}

async function fetchPostsFromRss() {
  const response = await fetch(FEED_URL, { headers: REQUEST_HEADERS });
  if (!response.ok) {
    throw new Error(`RSS request failed with status ${response.status}`);
  }

  const xml = await response.text();
  const feed = await parser.parseString(xml);
  return formatPosts(feed.items ?? []);
}

async function fetchPostsFromArchive() {
  const response = await fetch(ARCHIVE_URL, { headers: REQUEST_HEADERS });
  if (!response.ok) {
    throw new Error(`Archive request failed with status ${response.status}`);
  }

  const data = await response.json();
  const items = (Array.isArray(data) ? data : [])
    .filter((item) => item.canonical_url && item.title)
    .map((item) => ({
      title: item.title,
      link: item.canonical_url,
      contentSnippet:
        item.search_engine_description ||
        item.social_title ||
        item.social_description ||
        'Read the full post on Substack.',
    }));

  return formatPosts(items);
}

async function writePosts(posts) {
  if (!posts.length) {
    throw new Error('No posts found from Substack.');
  }

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
}

async function syncSubstack() {
  try {
    let posts;
    let source = FEED_URL;

    try {
      posts = await fetchPostsFromRss();
    } catch (rssError) {
      console.warn('RSS fetch failed, falling back to archive API.', rssError.message);
      posts = await fetchPostsFromArchive();
      source = ARCHIVE_URL;
    }

    await writePosts(posts);
    console.log(`Synced ${posts.length} posts from ${source}`);
  } catch (error) {
    // Keep builds green in CI if Substack blocks requests. Existing generated
    // posts remain in the repo and are still rendered by the site.
    console.warn('Failed to sync Substack feed. Reusing existing generated posts.', error.message);
    try {
      await fs.access(OUTPUT_PATH);
      process.exit(0);
    } catch {
      console.error('No existing generated posts file found at', OUTPUT_PATH);
      process.exit(1);
    }
  }
}

async function main() {
  try {
    await syncSubstack();
  } catch (error) {
    console.error('Unexpected sync error.', error);
    process.exit(1);
  }
}

main();

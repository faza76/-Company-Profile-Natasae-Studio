// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'public/blog');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  //console.log(fileNames)
 // Ensure to filter out non-Markdown files
    const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLatestPosts(count = 2) {
    const allPostsData = getSortedPostsData();
    return allPostsData.slice(0, count);
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File ${fullPath} does not exist.`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  console.log(contentHtml);
  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}

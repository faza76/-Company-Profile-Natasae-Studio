import { getPostData, getSortedPostsData, getLatestPosts } from '../../../lib/posts';
import styles from './BlogPost.module.css';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';

export async function generateStaticParams() {
    // Get all blog post IDs
    const allPostsData = getSortedPostsData();
    
    // Generate the params for each blog post
    return allPostsData.map(post => ({
      id: post.id,
    }));
  }


  export default async function PostPage({ params }) {
    const postData = await getPostData(params.id);
    const latestPosts = getLatestPosts();
    //console.log(postData);
  return (
    <div className='bg-gray-100 text-black'>
      <div className={styles.blogPost}>
              <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">{postData.title}</h1>
            <div className="prose prose-lg mb-8">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>

            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="space-y-6">
              {latestPosts
                .filter(post => post.id !== params.id) // Exclude the current post
                .map(({ id, title, date, description, coverImage }) => (
                  
                    <a key={id} href={`/blog/${id}`} className="flex items-center border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                      <img
                        src={coverImage}
                        alt={title}
                        className="w-1/2 h-auto object-cover rounded-l-lg"
                      />
                      <div className="w-1/2 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{date}</p>
                          <p className="text-gray-800">{description}</p>
                        </div>
                      </div>
                    </a>
                ))}
            </div>
          </div>
          
        </div>
    </div>
    
  )
}
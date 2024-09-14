import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import styles from './BlogList.module.css'; // CSS Module for Blog List


const blog = () => {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return (
    <div className='bg-neutral-100 text-black'>
      <div className="container max-w-6xl mx-auto md:p-24 p-6 ">
      <h1 className="text-4xl font-bold bm-8 sm:mb-12 text-center">Blog Posts</h1>
      <div className="space-y-8">
        {allPostsData.map(({ id, title, date, description, coverImage }) => (
          
            <a key={id} href={`/blog/${id}`} className="flex items-center   hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src={coverImage}
                alt={title}
                className="w-1/2 h-auto object-cover"
              />
              <div className="w-1/2 p-4 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{date}</p>
                  <h3 className="text-xl sm:text-3xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-800 text-sm md:text-base">{description}</p>
                </div>
              </div>
            </a>
        ))}
      </div>
    </div>
    </div>
  )
}

export default blog
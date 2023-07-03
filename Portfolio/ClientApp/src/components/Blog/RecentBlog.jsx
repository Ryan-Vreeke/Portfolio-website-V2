import React from 'react'
import './blog.css'
import BlogCard from './BlogCard'

function RecentBlog() {
  const count = 5;
  return (
    <div className="recent_blog">
      <h3 className='section_title'>Recent Posts</h3>

      <ul className="recent_posts">
        {Array.from({ length: count }, (_, index) => (
          <BlogCard name={`name ${index}`} date={index} />
        ))}
      </ul>
    </div>
  )
}

export default RecentBlog
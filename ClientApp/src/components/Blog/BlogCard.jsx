import React from 'react'

function BlogCard(props) {
    const { name, date} = props;

    return (

        <li className="blog-post">
            <a href="">
                <h3>{name}</h3>
                <h5 className='blog-date'>{date}</h5>
            </a>
        </li>
    )
}

export default BlogCard
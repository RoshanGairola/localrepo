import React from 'react'
import Header from '../header/Header'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
let allBlogs=blogs.map((v,i)=>{
    return(
<div className='blogItems'>
    
    <p> 
       <h3> {v.title}</h3>
        {v.body}
    </p>
    <button><Link to={`/Blog/${v.id}`}>Read More</Link></button>
</div>
    )
})
  return (
    <div><Header/>
        <h2>Blog Page</h2>
        <div className='container'>
            {allBlogs}
        </div>

    </div>
  )
}

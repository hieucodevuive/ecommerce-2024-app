import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'

const BlogCart = () => {
  return (
    <div className="col-lg-3 col-6 mb-3">
      <div class="card">
        <img src="images/blog-1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p className='time'>11 JUNE, 2024</p>
          <h5 class="card-title">A Beautiful Sunday Morning Renalssance</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={'/'} class="btn">READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCart

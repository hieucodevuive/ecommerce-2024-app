import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';

const CollectionCard = () => {
  return (
    <div className='bg-white card-container p-3 position-relative'>
      <div className='d-flex justify-content-between header-container'>
        <div className='discount-percen'>
          <span>-33%</span>
        </div>
        <img src='images/wish.svg' alt='' />
      </div>
      <Link className='img-container d-flex align-items-center justify-content-center'>
        <img src='images/watch.jpg' alt='' className='img-fluid' />
      </Link>
      <div className='d-flex flex-column align-align-items-center'>
        <Link>
          <p className='category'>Sony</p>
        </Link>
        <Link>
          <h4 className='title'>Kids Watch 2024</h4>
        </Link>
        <p className='description'>A mazing wath come from future will be expore in 2055</p>
        <ReactStars
          count={5}
          size={24}
          value={4}
          edit={false}
          activeColor="#ffd700"
        />
        <div className='d-flex gap-1'>
          <div className='price'>$100.00</div>
          <div className='discound-price'>$200.00</div>
        </div>
      </div>
      <div className='position-absolute action-bar d-flex flex-column gap-1'>
        <div className='action-icon'><img src="images/prodcompare.svg" alt="" /></div>
        <div className='action-icon'><img src="images/view.svg" alt="" /></div>
        <div className='action-icon'><img src="images/add-cart.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default CollectionCard

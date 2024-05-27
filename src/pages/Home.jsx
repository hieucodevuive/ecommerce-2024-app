import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 main-banner'>
              <div
                id='carouselExampleDark'
                class='carousel carousel-dark slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-indicators'>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleDark'
                    data-bs-slide-to='0'
                    className='active'
                    aria-current='true'
                    aria-label='Slide 1'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleDark'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                  ></button>
                </div>
                <div className='carousel-inner'>
                  <div
                    className='carousel-item active'
                    data-bs-interval='10000'
                  >
                    <img
                      src='images/main-banner.jpg'
                      className='d-block w-100 rounded-3'
                      alt='...'
                    />
                    <div className='carousel-caption d-none d-md-block text-white'>
                      <h5>Supper ultra s8 pro 2035</h5>
                      <p>
                        The HeadPhone come from future will be appear in next
                        year!
                      </p>
                    </div>
                  </div>
                  <div className='carousel-item' data-bs-interval='2000'>
                    <img
                      src='images/main-banner-1.jpg'
                      className='d-block w-100 rounded-3'
                      alt='...'
                    />
                    <div className='carousel-caption d-none d-md-block text-white'>
                      <h5>ISung ultra pro max 2035</h5>
                      <p>
                        The combination of Iphone and Samsung will stun you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6 d-none d-md-block'>
              <div className='row'>
                <Link to={'/'} className='col-6 catbanner'>
                  <img
                    src='images/catbanner-01.jpg'
                    alt='catbanner'
                    className='img-fluid rounded-3'
                  />
                  <div className='overlay'>BUY LAPTOP</div>
                </Link>
                <Link to={'/'} className='col-6 catbanner'>
                  <img
                    src='images/catbanner-02.jpg'
                    alt='catbanner'
                    className='img-fluid rounded-3'
                  />
                  <div className='overlay'>BUY WATCH</div>
                </Link>
              </div>
              <div className='row pt-4'>
                <Link to={'/'} className='col-6 catbanner'>
                  <img
                    src='images/catbanner-03.jpg'
                    alt='catbanner'
                    className='img-fluid rounded-3'
                  />
                  <div className='overlay'>BUY TABLET</div>
                </Link>
                <Link to={'/'} className='col-6 catbanner'>
                  <img
                    src='images/catbanner-04.jpg'
                    alt='catbanner'
                    className='img-fluid rounded-3'
                  />
                  <div className='overlay'>BUY HEADPHONE</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='wrapper-2 py-5'>
        <div className='container'>
          <div className='row d-flex align-items-center justify-content-center gap-3'>
            <div className='col-xl-2 col-6 col-sm-4 d-flex policy-container'>
              <div className='d-flex align-items-center gap-3'>
                <img src='images/service.png' alt='' />
                <div className='d-flex flex-column gap-1'>
                  <h5 className=''>Free Shipping</h5>
                  <span className=''>From all orders over $100</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-6 col-sm-4 d-flex policy-container'>
              <div className='d-flex align-items-center gap-3'>
                <img src='images/service-02.png' alt='' />
                <div className='d-flex flex-column gap-1'>
                  <h5 className=''>Daily Surprise Offers</h5>
                  <span className=''>Save up to 25% off</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-6 col-sm-4 d-flex policy-container'>
              <div className='d-flex align-items-center gap-3'>
                <img src='images/service-03.png' alt='' />
                <div className='d-flex flex-column gap-1'>
                  <h5 className=''>Support 24/7</h5>
                  <span className=''>Shop with an expert</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-6 col-sm-4 d-flex policy-container'>
              <div className='d-flex align-items-center gap-3'>
                <img src='images/service-04.png' alt='' />
                <div className='d-flex flex-column gap-1'>
                  <h5 className=''>Affordable Prices</h5>
                  <span className=''>Get Factory direct price</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-6 col-sm-4 d-flex policy-container'>
              <div className='d-flex align-items-center gap-3'>
                <img src='images/service-05.png' alt='' />
                <div className='d-flex flex-column gap-1'>
                  <h5 className=''>Secure Payments</h5>
                  <span className=''>100% Protected Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='wrapper-2 py-5'>
        <div className='container'>
          <div className='row categories f-flex align-items-center'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Computer & Laptop</h5>
                <span>8 items</span>
              </div>
              <img src='images/laptop.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Cameras & videos</h5>
                <span>8 items</span>
              </div>
              <img src='images/camera.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Smart Televison</h5>
                <span>8 items</span>
              </div>
              <img src='images/tv.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Accessories</h5>
                <span>8 items</span>
              </div>
              <img src='images/acc.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Headphones</h5>
                <span>8 items</span>
              </div>
              <img src='images/headphone.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Home Appliance</h5>
                <span>8 items</span>
              </div>
              <img src='images/homeapp.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Speaker</h5>
                <span>8 items</span>
              </div>
              <img src='images/speaker.jpg' alt='' />
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex align-items-center justify-content-center gap-2 category-container'>
              <div className='d-flex flex-column justify-content-between'>
                <h5>Phone & Tablet</h5>
                <span>8 items</span>
              </div>
              <img src='images/laptop.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container'>
          <div className="row">
            <Marquee className='d-flex align-items-center justify-content-between'>
              <div className="col-2 px-5">
                <img src="images/brand-01.png" alt="" />
              </div>
              <div className="col-2 px-5">
                <img src="images/brand-02.png" alt="" />
              </div>
              <div className="col-2 px-5">
                <img src="images/brand-03.png" alt="" />
              </div>
              <div className="col-2 px-5">
                <img src="images/brand-04.png" alt="" />
              </div>
              <div className="col-2 px-5">
                <img src="images/brand-05.png" alt="" />
              </div>
              <div className="col-2 px-5">
                <img src="images/brand-06.png" alt="" />
              </div>
              <div className="col-2 px-5">
                <img src="images/brand-07.png" alt="" />
              </div>
              <div className="col-2 px-8">
                <img src="images/brand-05.png" alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 wrapper-2">
        <div className="container d-flex flex-column gap-3">
          <h2 className='section-title'>our lastest news</h2>
          <div className="row">
            < BlogCard />
            < BlogCard />
            < BlogCard />
            < BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

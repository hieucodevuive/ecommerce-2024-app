import React from 'react';
import './Footer.css';
import {
  BsApple,
  BsFacebook,
  BsGooglePlay,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      {/* footer up */}
      <footer className='footer-up'>
        <div className='container-xl'>
          <div className='row footer-up-content'>
            <div className='col-xl-6 d-flex gap-2 align-items-center justify-content-center'>
              <img src='/images/newsletter.png' alt='sletter' />
              <div className='text-white fs-5 '>Sign Up For Newsletter</div>
            </div>
            <div className='col-xl-6 d-flex align-items-center justify-content-center'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search...'
                  aria-label='Search...'
                />
                <span className='input-group-text'>SUBSCRIBE</span>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </footer>
      {/* footer mid */}
      <footer className='footer-mid'>
        <div className='container-xl'>
          <div className='row footer-mid-content p-5'>
            <div className='col-3 d-flex flex-column gap-3'>
              <div className='title'>Contact Us</div>
              <div className='d-flex flex-column gap-1 text'>
                <div>Smart tech store</div>
                <div>123 Tran Dai Nghia, Ha Noi</div>
                <div>
                  Hotline:{' '}
                  <a className='text-white' href='tel:+84 999999696'>
                    (+84) 999 999 696
                  </a>
                </div>
                <div>smart.tech.neu@gmail.com</div>
              </div>
              <div className='d-flex gap-3'>
                <div className='container-social-icon'>
                  <a href='/#'>
                    <BsFacebook className='social-icon' />
                  </a>
                </div>
                <div className='container-social-icon'>
                  <a href='/#'>
                    <BsInstagram className='social-icon' />
                  </a>
                </div>
                <div className='container-social-icon'>
                  <a href='/#'>
                    <BsLinkedin className='social-icon' />
                  </a>
                </div>
                <div className='container-social-icon'>
                  <a href='/#'>
                    <BsTiktok className='social-icon' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-2 d-flex flex-column gap-3'>
              <div className='title'>Information</div>
              <div className='text'>
                <div>Privacy Policy</div>
                <div>Refund Policy</div>
                <div>Shipping Policy</div>
                <div>Terms Of Service</div>
                <div>Blogs</div>
              </div>
            </div>
            <div className='col-2 d-flex flex-column gap-3'>
              <div className='title'>Account</div>
              <div className='text'>
                <div>Search</div>
                <div>About Us</div>
                <div>Faq</div>
                <div>Contact</div>
                <div>Size Chart</div>
              </div>
            </div>
            <div className='col-2  d-flex flex-column gap-3'>
              <div className='title'>Quick Link</div>
              <div className='text'>
                <div>Accessories</div>
                <div>Laptops</div>
                <div>Headphones</div>
                <div>Smart Watches</div>
                <div>Tablets</div>
              </div>
            </div>
            <div className='col-3 d-flex flex-column gap-3'>
              <div className='title'>Our App</div>
              <div className='text'>
                Dowload our App and get estra 15% Discount on your first Order
              </div>
              <div className='d-flex gap-3'>
                <div className='d-flex container-store align-items-center gap-2'>
                  <div className='container-store-icon'>
                    <BsGooglePlay className='store-icon' />
                  </div>
                  <div>
                    <div className='text'>Get it on</div>
                    <div className='fw-bold'>Google play</div>
                  </div>
                </div>
                <div className='d-flex container-store align-items-center gap-2'>
                  <div className='container-store-icon'>
                    <BsApple className='store-icon' />
                  </div>
                  <div>
                    <div className='text'>Dowload on the</div>
                    <div className='fw-bold'>Apple Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-down'>
        <div className='text-white text'>
          <span>©2024 Smart Tech made by HieuPhamDev</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

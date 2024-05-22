import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

import { BsSearch } from 'react-icons/bs';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
                Free Shipping $100 & Free Return
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:{' '}
                <a className='text-white' href='tel:+84 999999696'>
                  (+84) 999 999 696
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white' to={'/'}>
                  Smart Tech
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search...'
                  aria-label='Search...'
                />
                <span className='input-group-text'>
                  <BsSearch className='text-white fs-5' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div className=''>
                  <Link className='d-flex gap-2 align-items-center'>
                    <img src='/images/compare.svg' alt='compare' />
                    <div className='header-font'>
                      Compare <br />
                      Products
                    </div>
                  </Link>
                </div>
                <div className=''>
                  <Link className='d-flex gap-2 align-items-center'>
                    <img src='/images/wishlist.svg' alt='wishlist' />
                    <div className='header-font'>
                      Favourite <br />
                      Wishlist
                    </div>
                  </Link>
                </div>
                <div className=''>
                  <Link className='d-flex gap-2 align-items-center'>
                    <img src='/images/user.svg' alt='user' />
                    <div className='header-font'>
                      Log in <br />
                      Account
                    </div>
                  </Link>
                </div>
                <div className=''>
                  <Link className='d-flex gap-2 align-items-center'>
                    <img src='/images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column gap-1'>
                      <div className='badge bg-warning text-white rounded-pill '>
                        0
                      </div>
                      <div className='header-font'>$0.00</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 d-flex align-items-center gap-4 py-2 px-0'>
              <div className='dropdown'>
                <button
                  className='btn dropdown-toggle text-white d-flex align-items-center gap-2'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <BsFillGrid3X3GapFill className='text-white icon-size' /> SHOP
                  CATEGORIES
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton1'
                >
                  <li>
                    <Link to={'/'} className='dropdown-item'>
                      Iphone
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'} className='dropdown-item'>
                      Samsung
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'} className='dropdown-item'>
                      Laptop
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='memu-links d-flex align-items-center gap-3 '>
                <div>
                  <NavLink className='header-font' to={'/'}>
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink className='header-font' to={'/about'}>
                    Our Store
                  </NavLink>
                </div>
                <div>
                  <NavLink className='header-font' to={'/'}>
                    Blogs
                  </NavLink>
                </div>
                <div>
                  <NavLink className='header-font' to={'/contact'}>
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

import { BsSearch } from 'react-icons/bs';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BsMenuUp } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='header'>
      <header className='header-top-strip py-3 d-none d-sm-block'>
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
          <div className='d-flex row align-items-center d-none d-sm-flex'>
            <div className='col-xl-2 col-sm-4 col-lg-2'>
              <h2 className='logo'>
                <Link className='text-white' to={'/'}>
                  Smart Tech
                </Link>
              </h2>
            </div>
            <div className='col-xl-5 col-sm-4 col-lg-5'>
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
            <div className='col-xl-5 col-lg-5 d-none d-lg-block'>
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
                    <img
                      src='/images/cart.svg'
                      alt='cart'
                      className='header-cart-icon'
                    />
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
            {/* Hambergur menu */}
            <nav className='header-menu col-sm-1 d-lg-none d-block'>
              <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarToggleExternalContent'
                aria-controls='navbarToggleExternalContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <BsMenuUp className='menu-icon' />
              </button>
            </nav>
            <div className='col-sm-1 d-lg-none d-block'>
              <Link className='item d-flex gap-2 align-items-center'>
                <img
                  src='/images/cart.svg'
                  alt='cart'
                  className='header-cart-icon'
                />
                <div className='d-flex flex-column gap-1'>
                  <div className='badge bg-warning text-white rounded-pill '>
                    0
                  </div>
                  <div className='text-white'>$0.00</div>
                </div>
              </Link>
            </div>
          </div>
          {/* Mobile */}
          <div className='row align-items-center d-sm-none'>
            <nav className='header-menu col-1'>
              <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarToggleExternalContent'
                aria-controls='navbarToggleExternalContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <BsMenuUp className='menu-icon' />
              </button>
            </nav>
            <div className='col-4 mt-2'>
              <h2 className='logo'>
                <Link className='text-white' to={'/'}>
                  Smart Tech
                </Link>
              </h2>
            </div>
            <div className='col-4'>
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

            <div className='col-2'>
              <Link className='item d-flex gap-2 align-items-center'>
                <img
                  src='/images/cart.svg'
                  alt='cart'
                  className='header-cart-icon'
                />
                <div className='d-flex flex-column gap-1'>
                  <div className='badge bg-warning text-white rounded-pill '>
                    0
                  </div>
                  <div className='text-white'>$0.00</div>
                </div>
              </Link>
            </div>
          </div>
          <div
            class='collapse header-ham-item'
            id='navbarToggleExternalContent'
          >
            <div className='bg-dark bg-gradient d-flex flex-column gap-2 p-2 mt-2 rounded-1'>
              <div>
                <Link className='item d-flex gap-2 align-items-center p-2'>
                  <img src='/images/compare.svg' alt='compare' />
                  <div className=''>Compare Products</div>
                </Link>
              </div>
              <div>
                <Link className='item d-flex gap-2 align-items-center p-2'>
                  <img src='/images/wishlist.svg' alt='wishlist' />
                  <div className=''>Favourite Wishlist</div>
                </Link>
              </div>
              <div className=''>
                <Link className='item d-flex gap-2 align-items-center p-2'>
                  <img src='/images/user.svg' alt='user' />
                  <div className=''>Log in Account</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 d-flex align-items-center gap-4 py-2 px-0'>
              <div className='dropdown d-none d-sm-block'>
                <button
                  className='btn dropdown-toggle text-white d-flex align-items-center gap-2'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  id='dropdownMenuButton1'
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
              <div className='memu-links p-2 d-flex align-items-center gap-3 '>
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
    </div>
  );
};

export default Header;

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import SidebarWishlist from '../../components/common/sidebar-wishlist';
import CartIcon from '../../components/elements/icons/cart-icon';
import User from '../../components/elements/icons/user';
import WishlistIcon from '../../components/elements/icons/wishlist-icon';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderMiddleThree from './header-middle-three';
import HeaderTopThree from './header-top-three';
import NavMenu from './navmenu';

const HeaderThree = () => {
    const { setShowSidebar } = useGlobalContext();
    const [catMenuOpen, setCatMenuOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)
    const { quantity } = useCartInfo();

    // Sticky Menu Area start
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    });

    const sticky = (e) => {
        const header = document.querySelector('#header-sticky');
        const scrollTop = window.scrollY;
        scrollTop >= 80 ? header.classList.add('header-sticky') : header.classList.remove('header-sticky');
    };
    // Sticky Menu Area End
    return (
      <>
        <header>
          <HeaderTopThree />
          <HeaderMiddleThree />
          <div className="bd-header__border">
            <div id="header-sticky" className="bd-header__middle-inner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                    <div className="bd-header__logo-3">
                      <Link href="/">
                        <a>
                          <img
                            src="/public/assets/img/logo/Qhaul_Logo_Smll.png"
                                                    alt="qhaul_logo"
                                                    className='mobile_qhaul_banner'
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                    <div className="bd-header__left">
                      <div className="main-menu d-none d-none d-lg-block">
                        <nav id="mobile-menu">
                          <NavMenu />
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                    <div className="bd-header__right d-flex align-items-center justify-content-end">
                      <div className="bd-action__cart-list">
                        <div className="bd-action__item">
                          <div className="bd-action__cart">
                            <div
                              className="bd-action__cart-icon"
                              onClick={() => setOpenCart(true)}
                            >
                              <span className="bd-cart-mini-btn">
                                <CartIcon />
                              </span>
                              <span className="bd-action__item-number cart-count">
                                {quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bd-action__item d-none">
                          <div className="bd-action__wishlist">
                            <div
                              className="bd-action__wistlist-icon"
                              onClick={() => setOpenWishlist(true)}
                            >
                              <span className="bd-cart-mini-btn">
                                <WishlistIcon />
                              </span>
                              <span className="bd-action__item-number wishlist-count">
                                {quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bd-action__item d-sm-flex d-none align-items-center">
                          <div className="bd-action__cart">
                            <div className="bd-action__cart-icon">
                              <Link href="/login">
                                <a>
                                  <User />
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="bd-action__user">
                            <Link href="/login">
                              <a>
                                <span>User</span>
                                <span>
                                  <span>Account</span>
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="header__hamburger d-flex ml-25">
                        <button
                          type="button"
                          className="hamburger-btn"
                          onClick={() => setShowSidebar(true)}
                        >
                          <span className="hamburger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bd-header__buttom d-none d-sm-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xxl-8 col-xl-8 col-md-8 col-sm-6">
                    <div className="bd-header__butttom-left">
                      <div className="bd-header__category-nav p-relative">
                        <div
                          className={
                            catMenuOpen
                              ? 'bd-category__click items-open'
                              : 'bd-category__click'
                          }
                          onClick={() => {
                            setCatMenuOpen(!catMenuOpen);
                          }}
                        >
                          <div className="bd-bar__icon">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <span>All Categories</span>
                        </div>
                        <div
                          className={
                            catMenuOpen
                              ? 'category__items d-block'
                              : 'category__items'
                          }
                        >
                          <div className="category-item">
                            <nav>
                              <ul>
                                <li className="has-dropdown">
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-apple-whole"></i>
                                      Fruits & Vegetables
                                    </a>
                                  </Link>
                                  <ul className="category-submenu">
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-olive-branch"></i>
                                          Fresh Seafood
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-burger-cheese"></i>
                                          Fast food
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-champagne-glasses"></i>
                                          Fruits & Vegetables
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-pizza"></i>
                                          Wines & Drinks
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-sandwich"></i>
                                          Grocery & Staples
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-kiwi-fruit"></i>
                                          Breakfast Sausage
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-cherries"></i>
                                      Fresh Fruits
                                    </a>
                                  </Link>
                                  <ul className="category-submenu">
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-olive-branch"></i>
                                          Fresh Seafood
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-burger-cheese"></i>
                                          Fast food
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-champagne-glasses"></i>
                                          Fruits & Vegetables
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-pizza"></i>
                                          Wines & Drinks
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-sandwich"></i>
                                          Grocery & Staples
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-kiwi-fruit"></i>
                                          Breakfast Sausage
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-peach"></i>
                                      Biscuits & Snacks
                                    </a>
                                  </Link>
                                </li>
                                <li className="has-dropdown">
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-citrus"></i>
                                      Organic Food
                                    </a>
                                  </Link>
                                  <ul className="category-submenu">
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-olive-branch"></i>
                                          Fresh Seafood
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-burger-cheese"></i>
                                          Fast food
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-champagne-glasses"></i>
                                          Fruits & Vegetables
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-pizza"></i>
                                          Wines & Drinks
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-sandwich"></i>
                                          Grocery & Staples
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-kiwi-fruit"></i>
                                          Breakfast Sausage
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-dropdown">
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-tomato"></i>
                                      Grocery & Staples
                                    </a>
                                  </Link>
                                  <ul className="category-submenu">
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-olive-branch"></i>
                                          Fresh Seafood
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-burger-cheese"></i>
                                          Fast food
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-champagne-glasses"></i>
                                          Fruits & Vegetables
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-pizza"></i>
                                          Wines & Drinks
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-sandwich"></i>
                                          Grocery & Staples
                                        </a>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/shop">
                                        <a>
                                          <i className="fa-regular fa-kiwi-fruit"></i>
                                          Breakfast Sausage
                                        </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-glass"></i>
                                      Milks and Dairies
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-drumstick"></i>
                                      Clothing & beauty
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-apple-whole"></i>
                                      Fresh Fruit
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop">
                                    <a>
                                      <i className="fa-regular fa-mug-hot"></i>
                                      Wines & Drinks
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                      <div className="bd-header__filterbar d-none d-md-block">
                        <form className="bd-filter__input" action="#">
                          <input type="text" placeholder="Search products..." />
                          <button>
                            <i className="flaticon-magnifiying-glass"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-md-4 col-sm-6">
                    <div className="bd-action__support d-flex justify-content-end">
                      <div className="bd-support__inner">
                        <div className="bd-support__icon">
                          <img
                            src="/assets/img/icon/support.png"
                            alt="support-icon"
                          />
                        </div>
                        <div className="bd-support__text">
                          <span>8:30 AM - 9:30 PM</span>
                          <a href="tel:878-185-287">(+2) 695 023 52</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Sidebar />
        <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
        <SidebarWishlist
          openWishlist={openWishlist}
          setOpenWishlist={setOpenWishlist}
        />
      </>
    );
};

export default HeaderThree;
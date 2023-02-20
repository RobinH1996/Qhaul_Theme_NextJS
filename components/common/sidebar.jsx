import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import useGlobalContext from '../../hooks/use-context';
import CartIcon from '../elements/icons/cart-icon';
import WishlistIcon from '../elements/icons/wishlist-icon';

const Sidebar = () => {
    const {showSidebar, setShowSidebar} = useGlobalContext();
    const [home, setHome] = useState(false);
    const [shop, setShop] = useState(false);
    const [productPages, setProductPages] = useState(false);
    const [otherPages, setOtherPages] = useState(false);
    const [blog, setBlog] = useState(false);

    const handleMenuDropDown = (page) => {
        if (page === 'home') {
            setHome(!home)
            setShop(false)
            setProductPages(false)
            setOtherPages(false);
            setBlog(false)
        }

        if (page === 'shop') {
            setHome(false)
            setShop(!shop)
            setProductPages(false)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'product-pages') {
            setHome(false)
            setShop(false)
            setProductPages(!productPages)
            setOtherPages(false)
            setBlog(false)
        }

        if (page === 'other-pages') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(!otherPages)
            setBlog(false)
        }

        if (page === 'blog') {
            setHome(false)
            setShop(false)
            setProductPages(false)
            setOtherPages(false)
            setBlog(!blog)
        }
    }

    return (
      <>
        <div className="fix">
          <div className={`side-info ${showSidebar ? 'info-open' : ''}`}>
            <div className="side-info-content">
              <div className="modals-content">
                <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                    <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                      <div className="offcanvas__logo logo">
                        <Link href="/">
                          <a>
                            <img
                              className="mobile_qhaul_banner"
                              src="/assets/img/logo/Qhaul_Logo_Small.png"
                              alt="logo"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="offcanvas__close">
                        <button
                          className="offcanvas__close-btn"
                          onClick={() => setShowSidebar(false)}
                        >
                          <i className="fal fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div className="bd-utilize__buttons mb-25 d-none">
                      <div className="bd-action__item">
                        <div className="bd-action__cart d-none">
                          <div className="bd-action__cart-icon">
                            <span className="bd-cart-mini-btn">
                              <CartIcon />
                            </span>
                            <span className="bd-action__item-number cart-count">
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bd-action__item d-none">
                        <div className="bd-action__wishlist">
                          <div className="bd-action__wistlist-icon">
                            <span className="bd-cart-mini-btn">
                              <WishlistIcon />
                            </span>
                            <span className="bd-action__item-number wishlist-count">
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="offcanvas__search mb-25">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="What are you searching for?"
                        />
                        <button type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                    <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                      <ul>
                        <Link href="/">
                          <b>Home</b>
                        </Link>

                        <li
                          className={`menu-item-has-children has-droupdown ${
                            blog ? 'active' : ''
                          }`}
                        >
                          <a onClick={() => handleMenuDropDown('blog')}>Blog</a>
                          <ul
                            onClick={() => setShowSidebar(false)}
                            className={`sub-menu ${blog ? 'active' : ''}`}
                          >
                            <li>
                              <Link href="/about">
                                <a>About Us</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog/green">
                                <a>Making The Earth Cleaner</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog/tscleanup">
                                <a>Trash Clean Up</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link href="/contact">
                            <a>Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="offcanvas__contact mt-30 mb-20">
                      <h4>Contact Us</h4>
                      <ul>
                        {/* <li className="d-flex align-items-center">
                                                <div className="offcanvas__contact-icon mr-15">
                                                    <i className="fal fa-map-marker-alt"></i>
                                                </div>
                                                <div className="offcanvas__contact-text">
                                                    <Link href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"><a target="_blank">12/A, Mirnada City Tower, NYC</a></Link>
                                                </div>
                                            </li> */}
                        <li className="d-flex align-items-center">
                          <div className="offcanvas__contact-icon mr-15">
                            <i className="far fa-phone"></i>
                          </div>
                          <div className="offcanvas__contact-text">
                            <a href="tel:+017205002022">+1 720 - 500 -2022</a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center">
                          <div className="offcanvas__contact-icon mr-15">
                            <i className="fal fa-envelope"></i>
                          </div>
                          <div className="offcanvas__contact-text">
                            <a href="tel:+017205002022">
                              <span className="mailto:qhauljunk@mail.com">
                                qhauljunk@gmail.com
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="offcanvas__social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => setShowSidebar(false)}
          className={`offcanvas-overlay ${showSidebar ? 'overlay-open' : ''}`}
        ></div>
      </>
    );
};

export default Sidebar;
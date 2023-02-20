import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import SidebarWishlist from '../../components/common/sidebar-wishlist';
import CartIcon from '../../components/elements/icons/cart-icon';
import WishlistIcon from '../../components/elements/icons/wishlist-icon';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderMiddleTwo from './header-middle-two';
import HeaderTopTwo from './header-top-two';
import NavMenu from './navmenu';

const HeaderTwo = () => {
    const { setShowSidebar } = useGlobalContext();
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
                <HeaderTopTwo />
                <HeaderMiddleTwo />
                <div id="header-sticky" className="bd-header__bottom-area-3 transparent__header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-6">
                                <div className="bd-header__logo-3">
                                    <Link href="/"><a><img src="/assets/img/logo/logo-2.png" alt="logo" /></a></Link>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 d-none d-lg-block">
                                <div className="bd-header__left-3">
                                    <div className="main-menu d-none d-none d-lg-block">
                                        <nav id="mobile-menu">
                                            <NavMenu />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-3 col-md-6 col-6">
                                <div className="bd-header__right header__right-3">
                                    <div className="bd-action__filter-wrapper d-none d-xl-block">
                                        <div className="bd-action__filter p-relative">
                                            <form action="#">
                                                <input type="text" placeholder="Search products..." />
                                                <button><i className="flaticon-magnifiying-glass"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="bd-action__cart-list list-3">
                                        <div className="bd-action__item">
                                            <div className="bd-action__cart-wrapper">
                                                <div className="bd-action__cart-icon" onClick={() => setOpenCart(true)}>
                                                    <span className='bd-cart-mini-btn'>
                                                        <CartIcon />
                                                    </span>
                                                    <span className="bd-action__item-number cart-count">{quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-action__item d-none">
                                            <div className="bd-action__wishlist">
                                                <div className="bd-action__wistlist-icon" onClick={() => setOpenWishlist(true)}>
                                                    <span className='bd-cart-mini-btn'>
                                                        <WishlistIcon />
                                                    </span>
                                                    <span className="bd-action__item-number wishlist-count">{quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header__hamburger d-flex d-lg-none">
                                        <button type="button" className="hamburger-btn" onClick={() => setShowSidebar(true)}>
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
            </header>
            <Sidebar />
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
            <SidebarWishlist openWishlist={openWishlist} setOpenWishlist={setOpenWishlist} />
        </>
    );
};

export default HeaderTwo;
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import SidebarWishlist from '../../components/common/sidebar-wishlist';
import CartIcon from '../../components/elements/icons/cart-icon';
import SearchIcon from '../../components/elements/icons/search-icon';
import WishlistIcon from '../../components/elements/icons/wishlist-icon';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTop from './header-top';
import NavMenu from './navmenu';

const HeaderOne = () => {
    const { setShowSidebar } = useGlobalContext();
    const [searchOpen, setSearchOpen] = useState(false)
    const [openCart,setOpenCart] = useState(false)
    const [openWishlist,setOpenWishlist] = useState(false)
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
		scrollTop >= 40 ? header.classList.add('header-sticky') : header.classList.remove('header-sticky');
	 };
	 // Sticky Menu Area End
    return (
        <>
            <header>
                <HeaderTop />
                <div id="header-sticky">
                    <div className="bd-header__area-2 position-relative">
                        <div className="container">
                            <div className="bd-header__main-wrapper-2">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <div className="bd-header__main-content">
                                            <div className="bd-header__left-2">
                                                <div className="bd-header__logo-2 p-relative">
                                                    <Link href="/"><a>
                                                        <img width={"10%"} display="block" className="logo-white qhaul_banner_logo" src="/assets/img/logo/Qhaul_Logo_Small.png" alt="logo" />
                                                    </a></Link>
                                                    <div className="bd-header__logo-bg">
                                                        <img src="/assets/img/logo/logo-bg.png" alt="logo-bg" />
                                                    </div>
                                                </div>
                                                <div className="main-menu d-none d-none d-lg-block">
                                                    <nav id="mobile-menu">
                                                        <NavMenu />
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="bd-header__right header__right-2">
                                                <div className="bd-action__cart-list justify-content-end">
                                                    <div className="bd-action__item bd-action__item-search">
                                                        <div className="bd-action__item">
                                                            <div className="bd-action__search-icon p-relative">
                                                                <span className={searchOpen ? "search-toggle bd-h-search bd-cart-mini-btn opened": "search-toggle bd-h-search bd-cart-mini-btn"} onClick={() => { setSearchOpen(!searchOpen) }}>
                                                                    <SearchIcon />
                                                                    <i className="fal fa-times"></i>
                                                                </span>
                                                                <div className={searchOpen ? "bd-search__toggle header_search-open": "bd-search__toggle"}>
                                                                    <form action="#">
                                                                        <input type="text" placeholder="Search here..." />
                                                                        <button type="submit"><i className="fal fa-search"></i></button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bd-action__item d-none">
                                                        <div className="bd-action__wishlist">
                                                            <div className="bd-action__wistlist-icon" onClick={()=> setOpenWishlist(true)}>
                                                                <span className='bd-cart-mini-btn'>
                                                                    <WishlistIcon />
                                                                </span>
                                                                <span className="bd-action__item-number wishlist-count">{quantity}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bd-action__hotline d-none d-xl-block">
                                                    <div className="bd-hotline__inner">
                                                        <div className="bd-hotline__icon">
                                                            <img src="/assets/img/icon/action-hotline.png" alt="hotline-icon" />
                                                        </div>
                                                        <div className="bd-hotline__text">
                                                            <span>Contact hotline</span>
                                                            <a href="tel:720-500-2022">720 - 500 - 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="header__hamburger d-flex d-xl-none">
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

export default HeaderOne;
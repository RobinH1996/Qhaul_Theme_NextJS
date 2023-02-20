const nav_menus_list = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/', title: 'Home' },
    
    ]
  },
  // {
  //   link: '/shop',
  //   title: 'Shop',
  //   hasDropdown: true,
  //   megamenu: false,
  //   dropdownItems: [
  //     { link: '/shop', title: 'Shop' },
  //     { link: '/shop-details', title: 'Shop Details' },
  //     { link: '/wishlist', title: 'Wishlist' },
  //     { link: '/cart', title: 'Cart' },
  //     { link: '/checkout', title: 'Checkout' },
  //   ]
  // },

  {
    link: '/blog',
    title: 'Blog',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/blog/about', title: 'Our Mission' },
      { link: '/blog/green', title: 'Making The Earth Cleaner' },
      { link: '/blog/tcleanup', title: 'Trash Clean Up' },
    ]
  },
  {
    link: '/contact',
    title: 'Contact',
  },
]

export default nav_menus_list;
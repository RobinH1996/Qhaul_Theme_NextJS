import React from 'react';
import productList from '../../data/products';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import ShopDetailsArea from './shop-details-area';

const item = productList[0]

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <ShopDetailsArea item={item} />
            </main>
            <FooterThree />
        </>
    );
};

export default index;
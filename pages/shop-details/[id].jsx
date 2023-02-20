import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/common/breadcrumb';
import SEO from '../../components/seo';
import ShopDetailsArea from '../../components/shop-details/shop-details-area';
import productList from '../../data/products';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';

const ShopsDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [shop, setShop] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setShop(productList.find(item => item.id == id)))

    return () => {};

  }, [id]);

  return (
    <>
      <SEO pageTitle={'Shop Details'} />
      <HeaderThree />
      <main>
        <ShopDetailsArea item={shop} />
      </main>
      <FooterThree />
    </>
  );
};

export default ShopsDetails;
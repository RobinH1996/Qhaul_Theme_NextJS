import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BlogDetailsArea from '../../components/blog-details/blog-details-area';
import Breadcrumb from '../../components/common/breadcrumb';
import SEO from '../../components/seo';
import blogItemsList from '../../data/blogs';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';

const BlogsDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [blog, setBlog] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setBlog(blogItemsList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Blog Details'} />
      <HeaderThree />
      <main>
      <Breadcrumb breadHome={'Home'} breadMenu={'Blog Details'} />
        <BlogDetailsArea item={blog} />
      </main>
      <FooterThree />
    </>
  );
};

export default BlogsDetails;
import SEO from '../../components/seo';
import BlogDetailsMain from '../../components/blog-details';

const index = () => {
  return (
    <>
      <SEO pageTitle={'Blog Details'} />
      <BlogDetailsMain />
    </>
  );
};

export default index;
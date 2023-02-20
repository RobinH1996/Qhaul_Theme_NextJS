import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogGridMain from '../components/blog-grid';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog Grid'} />
      <BlogGridMain />
    </Wrapper>
  );
};

export default index;
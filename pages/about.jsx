import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import AboutMain from '../components/about';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutMain />
    </Wrapper>
  );
};

export default index;
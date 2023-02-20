import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ErrorMain from '../components/error';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Error'} />
      <ErrorMain />
    </Wrapper>
  );
};

export default index;
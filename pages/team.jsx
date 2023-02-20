import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import TeamMain from '../components/team';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <TeamMain />
    </Wrapper>
  );
};

export default index;
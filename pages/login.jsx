import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import LoginMain from '../components/login';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Login'} />
            <LoginMain />
        </Wrapper>
    );
};

export default index;
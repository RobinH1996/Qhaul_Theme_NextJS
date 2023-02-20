import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import RegistrationMain from '../components/registration';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Registration'} />
            <RegistrationMain />
        </Wrapper>
    );
};

export default index;
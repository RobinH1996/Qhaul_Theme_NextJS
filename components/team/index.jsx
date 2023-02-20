import React from 'react';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import Breadcrumb from '../common/breadcrumb';
import TeamSectionSingle from './team-section-single';

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <Breadcrumb breadHome={'Home'} breadMenu={'Team'} />
                <TeamSectionSingle />
                <FooterThree />
            </main>
        </>
    );
};

export default index;
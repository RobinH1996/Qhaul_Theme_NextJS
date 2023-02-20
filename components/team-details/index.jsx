import React from 'react';
import TeamList from '../../data/team-data';
import FooterThree from '../../layout/footers/footer-three';
import HeaderThree from '../../layout/headers/header-three';
import TeamDetailsArea from './team-details-area';


const item = TeamList[0]

const index = () => {
    return (
        <>
        <HeaderThree />
            <main>
                <TeamDetailsArea item={item} />
            </main>
            <FooterThree />
        </>
    );
};

export default index;
import React from 'react';

const Pagination = ({Pagination_space}) => {
    return (
        <div className={`bd-basic__pagination ${Pagination_space ? Pagination_space : 'mt-30 mb-20'}`} data-wow-delay=".3s">
            <nav>
                <ul>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="fa-regular fa-angle-right"></i></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
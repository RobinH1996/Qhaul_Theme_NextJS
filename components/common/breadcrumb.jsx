import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ breadHome, breadMenu }) => {
   return (
      <div className="breadcrumb-area pt-10 pb-10">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="breadcrumb__list">
                     <span><Link href="/"><a>{breadHome}</a></Link></span>
                     <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                     <span>{breadMenu}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Breadcrumb;
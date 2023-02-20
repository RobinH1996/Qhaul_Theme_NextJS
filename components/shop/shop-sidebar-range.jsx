import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import useGlobalContext from '../../hooks/use-context';

const ShopSidebarRange = () => {
    const {price,handlePriceChange} = useGlobalContext();
    return (
        <div className="bd-filter__widget child-content-hidden">
            <h4 className="bd-filter__widget-title drop-btn">Price</h4>
            <div className="bd-filter__price">
                {/* <div className="slider-range">
                    <div id="slider-range">
                        <Slider
                            value={price}
                            max={500}
                            orientation="horizontal"
                            onChange={(value) => handlePriceChange(value)}
                        />
                    </div>
                    <p>
                        <label htmlFor="s-amount">Price :</label>
                        <input type="text" id="s-amount" className="amount" defaultValue={`$-${price}`} readOnly />
                        <span>Filter</span>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default ShopSidebarRange;
import React from 'react';

const ShopSidebarCategories = () => {
    return (
        <div className="bd-filter__widget child-content-hidden">
            <h4 className="bd-filter__widget-title drop-btn">Categories</h4>
            <div className="bd-filter__content">
                <div className="bd-product__check">
                    <ul>
                        <li>
                            <input className="check-input" type="checkbox" id="s-01" />
                            <label className="check-label" htmlFor="s-01">Meat & Fish</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-02" />
                            <label className="check-label" htmlFor="s-02">English  (6)</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-03" />
                            <label className="check-label" htmlFor="s-03">Beverage Food</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-04" />
                            <label className="check-label" htmlFor="s-04">Grocery</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-05" />
                            <label className="check-label" htmlFor="s-05">Bread & Bakery</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-06" />
                            <label className="check-label" htmlFor="s-06">Frozen Foods</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-07" />
                            <label className="check-label" htmlFor="s-07">Frozen Foods</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-08" />
                            <label className="check-label" htmlFor="s-08">Fruits</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-09" />
                            <label className="check-label" htmlFor="s-09">Breakfast & Dairy</label>
                        </li>
                        <li>
                            <input className="check-input" type="checkbox" id="s-10" />
                            <label className="check-label" htmlFor="s-10">Vegetable</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebarCategories;
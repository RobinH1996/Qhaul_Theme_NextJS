import React from 'react';

const ShopSidebarRatings = () => {
    return (
        <div className="bd-filter__widget child-content-hidden">
            <h4 className="bd-filter__widget-title drop-btn">Ratings</h4>
            <div className="bd-filter__content">
                <div className="bd-singel__rating">
                    <input className="radio-box" type="radio" id="s-st-1" name="rating" />
                    <label className="radio-star" htmlFor="s-st-1">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <span className="radio-item">(25)</span>
                    </label>
                </div>
                <div className="bd-singel__rating">
                    <input className="radio-box" type="radio" id="s-st-2" name="rating" />
                    <label className="radio-star" htmlFor="s-st-2">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <span className="radio-item">(36)</span>
                    </label>
                </div>
                <div className="bd-singel__rating">
                    <input className="radio-box" type="radio" id="s-st-3" name="rating" />
                    <label className="radio-star" htmlFor="s-st-3">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <span className="radio-item">(12)</span>
                    </label>
                </div>
                <div className="bd-singel__rating">
                    <input className="radio-box" type="radio" id="s-st-4" name="rating" />
                    <label className="radio-star" htmlFor="s-st-4">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <span className="radio-item">(20)</span>
                    </label>
                </div>
                <div className="bd-singel__rating">
                    <input className="radio-box" type="radio" id="s-st-5" name="rating" />
                    <label className="radio-star" htmlFor="s-st-5">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <i className="fa-light fa-star"></i>
                        <span className="radio-item">(11)</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebarRatings;
import React from 'react'
import Counter from '../../common/counter';

const counter_up = ({index,image,title,description}) => {
    return (
      <div>
        <div className="bd-banner__shape">
          <span className="counter">
            <Counter number={title.length *6.5} text={title} />
                </span>
                {/* //line break */}
          <span className="bd-banner__shape-line"></span>
          <p>
            Jobs Done
          </p>
        </div>
        <img className="floating" src={image} alt={`Image ${index}`} />
      </div>
    );
}

export default counter_up
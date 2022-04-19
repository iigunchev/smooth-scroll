import React from "react";

import "./style.scss";
import photos from "../../utils/photos";

const Featured = () => {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className="featured-section">
      <div className="featured-row-layout">
        <h6>sea</h6>
        <img src={firstUrl} alt=""/>
      </div>
      <div className="featured-column-layout">
        <h6>mountain</h6>
        <img src={secondUrl} alt=""/>
      </div>
    </section>
  );
};

export default Featured;

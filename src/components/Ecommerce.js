import React from "react";
import "./Ecommerce.css";

const Ecommerce = () => {
  return (
    <div className="ecommerce-container">
      <div className="ecommerce-content">
        <h1 className="ecommerce-title">Coming Soon!</h1>
        <p className="ecommerce-subtitle">
          We're working hard to bring you an amazing shopping experience.
        </p>
        <p className="ecommerce-message">
          Stay tuned for updates. Exciting features are on the way!
        </p>
        <button className="ecommerce-revisit-btn" onClick={() => window.location.reload()}>
          Check Again
        </button>
      </div>
    </div>
  );
};

export default Ecommerce;

import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">
            <small>₺</small>
            <strong>30</strong>
          </p>
          <div className="product__rating">⭐⭐</div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="product"
        />

        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;

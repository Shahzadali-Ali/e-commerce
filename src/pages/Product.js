/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Product() {

  return (
    <li>
   
    <figure>
      <a className="aa-product-img">
      <img src="img/man/polo-shirt-2.png"/></a>
      <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
        <figcaption>
        <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
        <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
      </figcaption>
    </figure>                        
    <div class="aa-product-hvr-content">
      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
      <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare"><span class="fa fa-exchange"></span></a>
      <a href="#" data-toggle2="tooltip" data-placement="top" title="" data-toggle="modal" data-target="#quick-view-modal" data-original-title="Quick View"><span class="fa fa-search"></span></a>                          
    </div>
 
    <span class="aa-badge aa-sale" href="#">SALE!</span>
 
  </li>
    

  );
}

export default Product;
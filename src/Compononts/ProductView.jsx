import "./ProductView.css"
import sample1 from "../assets/2.jpg"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { productBase } from "../utils";
const ProductView = () => {
    const [product,setProduct] = useState()
    const location = useLocation()
    const getProduct = async()=>{
        const response = await axios.get(`${productBase}get-product/${location.pathname.split("/")[3]}`)
        response && response.data.success == true && response.data.product && setProduct(response.data.product)
    }
    useEffect(()=>{
        getProduct()
    },[])
    return (
        <>
            {console.log(product)
            }
            <div className="productview">
                <div className="productview-container">
                    <div className="back-btn">
                        <h6>&lt;</h6>
                    </div>
                    <div className="product-content">
                        <div className="product-content-img">
                            {product && product[0].image && <img src={`https://fastkart-backend.onrender.com/uploads/${product[0].image}`} alt="" />}
                        </div>
                        <div className="product-content-content">
                            <div className="product-name">
                                {product && product[0].productName && <h4>{product[0].productName}</h4>}
                            </div>
                            <div className="product-ratings">
                                <h5>⭐⭐⭐⭐⭐</h5>
                                <h5 className="rate-txt">Ratings (30)</h5>
                            </div>
                            <div className="product-desc">
                                <h5 className="desc">Description</h5>
                                {product && product[0].productDescription && <h6 className="desc">{product[0].productDescription}</h6>}
                            </div>
                            <div className="size-ram">
                                Size  <div className="types">
                                    <div>S</div>
                                    <div>M</div>
                                    <div>L</div>
                                </div>
                            </div>
                            <div className="service">
                                Free shipping available in this product
                            </div>
                            <div className="price">
                                {product && product[0].productPrice && <div className="offer-price">Rs.{product[0].productPrice}</div>}
                                {product && product[0].productPrice && <div className="orignal-price">{product[0].productPrice + (product[0].productPrice%12)}</div>}
                            </div>
                            <div className="add-to-cart">
                                <div className="order-number">
                                    <div className="order-add">-</div>
                                    <div className="num">1</div>
                                    <div className="order-sub">+</div>
                                </div>
                                <div className="add-to-cart-btn">
                                    add to cart
                                </div>
                            </div>
                            <div className="buy-now-btn">Buy now</div>
                        </div>
                    </div>
                    <div className="product-content-bottom">
                        <div className="bottom-content">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductView;

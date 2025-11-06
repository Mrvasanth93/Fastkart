import "./Card1.css"
import sample from "../../assets/img (8).jpg"
import wishlist from "../../assets/icons/icons8-heart-26 (1).png"
import cartImg from "../../assets/icons/icons8-cart-24.png"
import { useLocation, useNavigate } from "react-router-dom"
const Card1 = (probs) =>{
    const path = useLocation();
    const navigate = useNavigate()
    const openProduvtView = () =>{
        navigate(`/product/${probs.data._id}`)
    }
    return(
        <>
            <div onClick={()=>{openProduvtView()}} className="card1">
                <div className="card-top">
                    <div className="wishlist">
                        <img src={wishlist} alt="" />
                    </div>
                    <img src={`https://fastkart-backend.onrender.com/uploads/${probs.data.image}`} alt="" />
                </div>
                <div className="card-middle">
                    {probs.data.productName && <div className="productname">{probs.data.productName}</div>}
                    <div className="productdesc">{probs.data.productDescription}</div>
                    <div className="price">
                        <div className="current-price">{probs.data.productPrice}</div>
                        <div className="original-price">{probs.data.productPrice+(probs.data.productPrice%10)}</div>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="cart-img"><img src={cartImg} alt="" /></div>
                    <div>add to cart</div>
                </div>
            </div>
        </>
    )
}

export default Card1

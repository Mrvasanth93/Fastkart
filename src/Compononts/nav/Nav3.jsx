import "./Nav3.css"
import ordericon from "../../assets/icons/icons8-shipping-50.png"
import wishicon from "../../assets/icons/icons8-heart-26 (1).png"
import findicon from "../../assets/icons/icons8-find-30.png"
import profileicon from "../../assets/icons/icons8-support-50.png"
import { useNavigate } from "react-router-dom"
const Nav3 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="nav-3">
                <div className="nav-3-container">
                    <div className="options">
                        <img src={ordericon} alt="" className="option-img" />
                        <div className="option-text">Orders</div>
                    </div>
                    <div className="options">
                        <img src={findicon} alt="" className="option-img" />
                        <div className="option-text">Serch</div>
                    </div>
                    <div className="options">
                        <img src={wishicon} alt="" className="option-img" />
                        <div className="option-text">Wishlist</div>
                    </div>
                    <div onClick={()=>{navigate("/admin/products/create")
                        }} className="options">
                        <img  src={profileicon} alt="" className="option-img" />
                        <div className="option-text">Profile</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav3
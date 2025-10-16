import { useRef } from "react";
import "./Nav2.css"
import { Link } from "react-router-dom";
const Nav2 = () => {
    const scrollRate = useRef()
    const handleMove = (pos) =>{
        if(pos == "left"){
            scrollRate.current.scrollLeft -= 90
        }
        else if(pos == "right"){
            scrollRate.current.scrollLeft += 90
        }
    }
    return (
        <>
            <div className="nav2-btns">
                    <div onClick={()=>{handleMove("left")}} className="left">&lt;</div>
                    <div onClick={()=>{handleMove("right")}} className="right">&gt;</div>
                </div>
            <div  className="nav-2">
                <div ref={scrollRate} className="categories">
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/fastkartEcom">Home</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/fashion">Fasion</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/electronics">Electronics</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/bags">Bags</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/footwear">Footwear</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="beauty">Beauty</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/wellness">Wellness</Link></h6>
                </div>
                <div className="category">
                    <h6 className="category-text"><Link style={{color:"black", textDecoration:"none"}} to="/jwells">Jewellery</Link></h6>
                </div>
            </div>
            </div>
        </>
    )
}

export default Nav2;
import "./Banner.css"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import { useState } from "react"
import { useEffect } from "react"
const Banner = () =>{
    const [images,setImages] = useState([banner1,banner2]);
    const [image,setImage] = useState(1);
    useEffect(()=>{
        const intervel = setInterval(() => {
            if(image == 0){
                setImage(1)
            }
            else{
                setImage(0)
            }
        
        }, 3000);
        return ()=> clearInterval(intervel)
    })
    return(
        <>
           <div className="banner">
                <div className="banner-container">
                    <img src={images[image]} alt="" />
                </div>
           </div>
        </>
    )
}

export default Banner;
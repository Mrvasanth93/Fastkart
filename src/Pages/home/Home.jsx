import "./Home.css"
import curosel1 from "../../assets/curosel1.jpg"
import curosel2 from "../../assets/curosel2.jpg"
import curosel3 from "../../assets/curosel3.jpg"
import category1 from "../../assets/category-1.png"
import category2 from "../../assets/category-2.png"
import category3 from "../../assets/category-3.png"
import category4 from "../../assets/category-4.png"
import category5 from "../../assets/category-5.png"
import category6 from "../../assets/category-6.png"
import category7 from "../../assets/category-7.png"
import category8 from "../../assets/category-8.png"
import Products from "../../Compononts/Products"
import { useEffect, useState } from "react"
import Curosel from "../../Compononts/Curosel"
import Banner from "../../Compononts/Banner"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { productBase, authBase } from "../../utils"
import Loader from "../../Compononts/Loader"

const Home = () => {
    const [popularProducts, setPopularProducts] = useState()
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    setTimeout(() => {
        setLoader(false)
    }, 1000);
    const handleNavigate = (locateTo) => {
        navigate(locateTo)
    }
    const handleIsAuthenticated = async () => {
        try {
            const response = await axios.get(`${authBase}profile`, { withCredentials: true })
            response && response.data.success == false && response.data.message == "continue with login" && handleNavigate("/login")
            response && response.data.success == false && response.data.message == "cannot find user" && handleNavigate("/login")
            response && response.data.success == false && response.data.message == "un Authorized token" && handleNavigate("/login")
            response && response.data.success == true && response.data.user && handleGetProducts()

        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
            error.message == "Request failed with status code 404" && console.log("create server error page");

        }
    }
    const handleGetProducts = async () => {
        try {
            const response = await axios.get(`${productBase}get-products`)
            response && response.data.success == false && response.data.no_of_products == 0 && console.log("create try again page");
            response && response.data.success == false && response.data.message == "cannot get products" && console.log("create server error page");
            response && response.data.success == false && response.data.error && console.log("create server error page");
            response && response.data.success == true && response.data.products && setPopularProducts(response.data.products)

        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
        }
    }
    useEffect(() => {
        handleIsAuthenticated()
    }, [])
    const [curoselImages, setCuroselImages] = useState([curosel1, curosel2, curosel3])
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const intervel = setInterval(() => {
            currentImage == 2 ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
        }, 3000);
        return () => clearInterval(intervel)
    })
    const moveNext = (nav) => {
        if (nav == "right") {
            currentImage == 2 ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
        }
        else if (nav == "left") {
            currentImage == 0 ? setCurrentImage(2) : setCurrentImage(currentImage - 1)
        }
    }
    return (
        <>
            <div className="home">
                <div className="navprevnext">
                    <div className="prev" onClick={() => { moveNext("left") }}>&lt;</div>
                    <div className="next" onClick={() => { moveNext("right") }}>&gt;</div>
                </div>
                <div className="curosel">
                    <img src={curoselImages[currentImage]} alt="" />
                </div>
            </div>
            <div className="home-categories">
                <div onClick={() => { handleNavigate("/fashion") }} className="home-category category1">
                    <div className="category-img"><img src={category3} alt="" /></div>
                    <div className="category-name">Fashion</div>
                </div>
                <div onClick={() => { handleNavigate("/electronics") }} className="home-category category2">
                    <div className="category-img"><img src={category4} alt="" /></div>
                    <div className="category-name">Electronics</div>
                </div>
                <div onClick={() => { handleNavigate("/bags") }} className="home-category category3">
                    <div className="category-img"><img src={category2} alt="" /></div>
                    <div className="category-name">Bags</div>
                </div>
                <div onClick={() => { handleNavigate("/footwear") }} className="home-category category4">
                    <div className="category-img"><img src={category8} alt="" /></div>
                    <div className="category-name">Footwear</div>
                </div>
                <div onClick={() => { handleNavigate("/beauty") }} className="home-category category5">
                    <div className="category-img"><img src={category1} alt="" /></div>
                    <div className="category-name">Beauty</div>
                </div>
                <div onClick={() => { handleNavigate("/wellness") }} className="home-category category6">
                    <div className="category-img"><img src={category7} alt="" /></div>
                    <div className="category-name">Wellness</div>
                </div>
                <div onClick={() => { handleNavigate("/jwells") }} className="home-category category7">
                    <div className="category-img"><img src={category6} alt="" /></div>
                    <div className="category-name">Jewellery</div>
                </div>
            </div>
            {
                loader ? <Loader /> : popularProducts && <>
                    <Products title="Popular Products" data={popularProducts} />
                    <Curosel imgName={["curosel1", "curosel2"]} />
                    <Products title="Fashion" data={popularProducts} />
                    <Products title="Electronics" data={popularProducts} />
                    <div className="services-ad">
                        <div className="ad">
                            <h5>Free Shipping</h5>
                            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam officiis incidunt saepe?</h6>
                            <h5>~ Only $200</h5>
                        </div>
                    </div>
                    <Products title="Beauty" data={popularProducts} />
                    <Products title="Bags" data={popularProducts} />
                    <Banner />
                    <Products title="Footwear" data={popularProducts} />
                    <Products title="More Categories" data={popularProducts} />
                </>
            }
        </>
    )
}

export default Home;
import { useState } from "react"
import "./CreateProduct.css"
import axios from "axios";
import { productBase } from "../../utils";
import { useRef } from "react";
const CreateProduct = () => {
    const productbase = productBase
    const [productName, setProductName] = useState();
    const [productDescription, setProductDescription] = useState()
    const [productPrice, setProductPrice] = useState()
    const [category, setCategory] = useState()
    const [colour, setColour] = useState()
    const [ram, setRam] = useState()
    const [stock, setStock] = useState()
    const [storage, setStorage] = useState()
    const [weight, setWeight] = useState()
    const [size, setSize] = useState()
    const [gender, setGender] = useState()
    const [image, setImage] = useState()
    const afterCreated = ()=>{
        setProductName("")
            setProductDescription("")
            setProductPrice("")
            setCategory("")
            setColour("")
            setRam("")
            setStock("")
            setStorage("")
            setSize("")
            setWeight("")
            setGender("")
            setImage("")  
        alert("product created")
    }
    const handleCreateProduct = async () => {
        try {
            const formData = new FormData()
            formData.append("productName", productName)
            formData.append("productDescription", productDescription)
            formData.append("productPrice", productPrice)
            formData.append("category", category)
            formData.append("colour",colour)
            formData.append("ram",ram),
            formData.append("storage",storage),
            formData.append("weight",weight),
            formData.append("size",size)
            formData.append("stock", stock)
            formData.append("gender", gender)
            formData.append("image", image)
            const response = await axios.post(`${productBase}post-product`,
                formData,
                {
                    withCredentials: true,
                    headers: { "Content-Type": "multipart/form-data" }
                })
              
            response && response.data && response.data.message == "product created" && afterCreated()
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="create-product">
                <div className="form">
                    <h5 className="title">Craete Product</h5>
                    <div className="inputs">
                        <input value={productName} onChange={(e) => { setProductName(e.target.value) }} className="name" type="text" placeholder="Name" />
                        <textarea value={productDescription} onChange={(e) => { setProductDescription(e.target.value) }} className="description" type="text" />
                        <div className="priceandstock">
                            <input value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }} className="price" type="text" placeholder="Price" />
                            <input value={stock} onChange={(e) => { setStock(e.target.value) }} className="stock" type="text" placeholder="stock" />
                        </div>
                        <select onChange={(e) => {setCategory(e.target.value)
                         }} name="category" id="">
                            <option value="Fashion">Fashion</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Bags">Bags</option>
                            <option value="Footwear">Footwaer</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Wellness">Wellness</option>
                            <option value="jwels">Jwels</option>
                        </select>
                        <div className="priceandstock">
                            <input value={colour} onChange={(e) => { setColour(e.target.value) }} className="colour" type="text" placeholder="colour" />
                            <input value={size} onChange={(e) => { setSize(e.target.value) }} className="size" type="text" placeholder="size" />
                        </div>
                        <div className="priceandstock">
                            <input value={ram} onChange={(e) => { setRam(e.target.value) }} className="ram" type="text" placeholder="ram" />
                            <input value={storage} onChange={(e) => { setStorage(e.target.value) }} className="storage" type="text" placeholder="storage" />
                        </div>
                        <input value={weight} onChange={(e) => { setWeight(e.target.value) }} className="weight" type="text" placeholder="weight" />
                        <select onChange={(e) => { setGender(e.target.value) }} name="gender" id="">
                            <option value="Genral">Genral</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                        </select>
                        <input onChange={(e) => { setImage(e.target.files[0]) }} name="image" className="file" type="file" />
                    </div>
                    <div onClick={() => { handleCreateProduct() }} className="btn">
                        Create Product
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateProduct
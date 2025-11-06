import "./auth.css"
import notvisible from "../../assets/icons/icons8-hide-24.png"
import glogo from "../../assets/icons/icons8-google-48.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { authBase } from "../../utils"
import { useRef } from "react"
const Login = () => {
    const error_message = useRef()
    const [message,setMessage] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const onLogin = async () => {
        try {
            setMessage()
            const response = await axios.post(`${authBase}login`,{"credintials":email, password},{withCredentials:true})
            response && response.data.success == true ? response.data.message == "login successfull" && navigate("/fastkartEcom") :
            setMessage(response.data.message)
        } catch (error) {
            error.message == "Network Error" && console.log("create server error page");
            error.message == "Request failed with status code 404" && console.log("create server error page");
        }
    }
    return (
        <>
            <div className="auth-form">
                <div className="login-register">
                    <h5 className="title">Login into your account</h5>
                    <div className="inputs">
                        <input onChange={(e) => { setEmail(e.target.value) }} className="email" type="text" placeholder="Email" />
                        <div className="password">
                            <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Password" />
                            <div className="visible">
                                <img src={notvisible} alt="" />
                            </div>
                        </div>
                    </div>
                    {message && <h6 ref={error_message} className="error-message">{message}</h6>}
                    <h5 className="forget-password">Forget Password ?</h5>
                    <div onClick={onLogin} className="login-register-btn">
                        Login
                    </div>
                    <div className="login-signup-link">Not Registered ? <span><NavLink className="link" to="/signup">Signup</NavLink></span></div>
                    <div className="login-signup-link">Or continue with</div>
                    <div className="google">
                        <div className="g-logo"><img src={glogo} alt="" /></div>
                        <div className="g-text">Login with Google</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
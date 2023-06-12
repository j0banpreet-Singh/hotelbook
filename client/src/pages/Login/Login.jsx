import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login.css"

const Login = () => {
    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/")
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data })
        }
    }

    return (
        <div className="login">
            <div className="lContainer">
                <h2 className="heading">Please Login here</h2>
                <input
                    placeholder="username"
                    type="text"
                    id="username"
                    onBlur={handleChange}
                    className="lInput"
                />
                <input
                    placeholder="password"
                    type="password"
                    id="password"
                    onBlur={handleChange}
                    className="lInput"
                />

                <button className="lButton" disabled={loading} onClick={handleClick}>
                    login
                </button>
                {error && <span>{error.message || error}</span>}
            </div>
        </div>
    )
}

export default Login;
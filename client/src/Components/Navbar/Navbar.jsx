import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
    const{user} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar">
                <div className="navContainer">
                    <span className="logo">singhBooking</span>
                    {user? user.username:<div className="navItems">
                        <button className="navButton">Register</button>
                        <button className="navButton">Login</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
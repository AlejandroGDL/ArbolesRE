import "../styles/NavBar.css";
import logo from "../assets/logo.png";

export default function NavBar() {

    return(
        <div className="NavBar">
            <img src={logo} alt="" className="NavBarImg"/>
        </div>
    )
}
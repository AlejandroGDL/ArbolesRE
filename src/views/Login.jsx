import NavBar from "../Components/NavBar";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="LoginContainer">
            <NavBar />
            
            <form className="LoginForm">
                <img src="../src/assets/Userico.jpg" alt="" className="Userimg"/>
                <img src="../src/assets/logo.png" alt="" className="Logoimg"/>
                <p>Nombre de usuario:</p>
                <input type="email" name="" id="" />
                <p>Contraseña:</p>
                <input type="password" name="" id="" />
                <Link to={`/Menu`}><button type="submit" id="btnLogin">Login</button></Link>
            </form>
        </div>
    )
}
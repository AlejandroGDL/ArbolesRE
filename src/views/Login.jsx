import NavBar from "../Components/NavBar";
import "../styles/Login.css";

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
                <button type="submit" id="btnLogin">Login</button>
            </form>
        </div>
    )
}
import NavBar from "../Components/NavBar";
import "../styles/Login.css";

import { Link } from "react-router-dom";
import useAuth from "../hook/UseAuth";
import {createRef} from 'react';



export default function Login() {
    const emailRef = createRef();
    const passwordRef = createRef();

    const {login} = useAuth({
        middleware: 'guest',
        url: '/Menu',
    });

    const handleSubmit = async(e) => {
        e.preventDefault();

        const datos = {
            correo: emailRef.current.value,
            contraseña: passwordRef.current.value
        }
        login(datos)

    }

    return(
        <div className="LoginContainer">
            <NavBar />
            
            <form className="LoginForm" onSubmit={handleSubmit}>
                <img src="../src/assets/Userico.jpg" alt="" className="Userimg"/>
                <img src="../src/assets/logo.png" alt="" className="Logoimg"/>
                <p>Nombre de usuario:</p>
                <input type="email" name="" id="" ref={emailRef}/>
                <p>Contraseña:</p>
                <input type="password" name="" id="" ref={passwordRef}/>
                <input type="submit" id="btnLogin" value="login"/>
            </form>
        </div>
    )
}
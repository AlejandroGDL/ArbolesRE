import NavBar from "../Components/NavBar";
import "../styles/Login.css";
import UserIco from "/src/assets/Userico.jpg";
import logo from "/src/assets//logo.png";

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
            Email: emailRef.current.value,
            Password: passwordRef.current.value
        }
        login(datos)
    }

    return(
        <div className="LoginContainer">
            <NavBar />
            
            <form className="LoginForm" onSubmit={handleSubmit}>
                <img src={UserIco} alt="" className="Userimg"/>
                <img src={logo} alt="" className="Logoimg"/>
                <p>Nombre de usuario:</p>
                <input type="email" name="Email" ref={emailRef}/>
                <p>Contraseña:</p>
                <input type="password" name="Password" ref={passwordRef}/>
                <input type="submit" id="btnLogin" value="login"/>
            </form>
        </div>
    )
}
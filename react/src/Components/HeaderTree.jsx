import "../styles/HeaderTree.css";
import { Link } from "react-router-dom";

import useAuth from '../hook/UseAuth'

export default function HeaderTree() {
    
    const {logout} = useAuth({middleware:'auth',url:'/'});

    return(
        <div className="HeaderContainer">
            <Link to={`/`}><button className="btnSignOut" onClick={logout}>Cerrar Sesión</button></Link>
        </div>
    )
}
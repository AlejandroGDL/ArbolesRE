import "../styles/HeaderTree.css";
import { Link } from "react-router-dom";


export default function HeaderTree() {
    return(
        <div className="HeaderContainer">
            <Link to={`/`}><button className="btnSignOut">Cerrar Sesión</button></Link>
            <button className="btnAddTree">Agregar Arbol</button>
        </div>
    )
}
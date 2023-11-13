import "../styles/Menu.css";
import NavBar from "../Components/NavBar";
import { useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

export default function Menu() {
    const [Arboles, setArbol] = useState([])
    
    //Primer accion al abrir 
    useEffect (()=>{
        getAllArboles();
    },[])

    // Metodo para obtener todas las plantas de la base de datos
    const getAllArboles = async () => {
        const response = await clienteAxios.get('/api/Arboles')
        setArbol(response.data)
    }

    return(
        <div>
            <NavBar/>

            <table className="TableMenu">
                <thead>
                    <th>ID</th>
                    <th>Temperatura Ambiente</th>
                    <th>Humedad en Tierra</th>
                    <th>Humedad Ambiente</th>
                    <th>Hora de Riego</th>
                </thead>
                <tbody>
                {Arboles.map((Arbol)=>(
                    <tr key={Arbol.idarbol}>
                        <td>{Arbol.idarbol}</td>
                        <td>{Arbol.idone.temperaturaAmb}</td>
                        <td>{Arbol.idtwo.temperaturaTierra}</td>
                        <td>{Arbol.idone.humedadAmb}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
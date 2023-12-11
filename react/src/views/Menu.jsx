import "../styles/Menu.css";
import NavBar from "../Components/NavBar";
import { useState, useEffect } from 'react';
import clienteAxios from '../config/axios';
import HeaderTree from "../Components/HeaderTree";



export default function Menu() {
    const [Arboles, setArbol] = useState([])
    const [Sensorones, setSensorone] = useState([])
    const [Sensortwos, setSensortwo] = useState([])
    
    //Primer accion al abrir 
    useEffect (()=>{
        getAllArboles();
        getSensorOne();
        getSensortwo();
    },[])

    // Metodo para obtener todas las plantas de la base de datos
    const getAllArboles = async () => {
        const response = await clienteAxios.get('/api/ArbolesT')
        setArbol(response.data)
    }
    // Metodo para obtener todas las plantas de la base de datos
    const getSensorOne = async () => {
        const response = await clienteAxios.get('/api/Sensorone')
        setSensorone(response.data)
    }
    // Metodo para obtener todas las plantas de la base de datos
    const getSensortwo = async () => {
        const response = await clienteAxios.get('/api/Sensortwo')
        setSensortwo(response.data)
    }

    return(
        <div>
            <NavBar/>

            <HeaderTree/>
            <div className="Tablas">
                {/* <table className="TableMenu">
                    <thead>
                        <th>ID</th>
                    </thead>
                    <tbody>
                    {Arboles.map((Arbol)=>(
                        <tr key={Arbol.id}>
                            <td>{Arbol.id}</td>
                        </tr>
                    ))}
                    </tbody>
                </table> */}

                <table className="TableMenu">
                    <thead>
                        <th>Temperatura Ambiente</th>
                        <th>Humedad Ambiente</th>
                    </thead>
                    <tbody>
                    {Sensorones.map((Sensorone)=>(
                        <tr key={Sensorone.id}>
                            <td>{Sensorone.Temperature}</td>
                            <td>{Sensorone.Humidity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <table className="TableMenu">
                    <thead>
                        <th>Humedad en Tierra</th>
                        {/* <th>Hora</th> */}
                    </thead>
                    <tbody>
                    {Sensortwos.map((Sensortwo)=>(
                        <tr key={Sensortwo.id}>
                            <td>{Sensortwo.Humidity}</td>
                            {/* <td>{Sensortwo.created_at.slice(11,19)}</td> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
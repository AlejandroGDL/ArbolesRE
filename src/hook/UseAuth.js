import clienteAxios from "../config/axios";
import { useNavigate } from 'react-router-dom'


export const useAuth = ({middleware,url}) => {

    var Navegacion = useNavigate();
    
    const login = async(datos) => {
        try {
            const {data} = await clienteAxios.post('/api/Login', datos)
            localStorage.setItem('AUTH TOKEN', data.token)
            Navegacion('/Menu')
        } catch (error) {
            console.log(error.response.data.errors)
        }
    }

    return {
        login,
    }
}

export default useAuth;
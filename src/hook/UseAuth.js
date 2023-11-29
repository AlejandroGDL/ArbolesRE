import clienteAxios from "../config/axios";
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { useEffect } from "react";

export const useAuth = ({middleware,url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')

    const {data: user,error, mutate} = useSWR('/api/user', () => 
        clienteAxios.get('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    var Navegacion = useNavigate();
    
    const login = async(datos) => {
        try {
            const {data} = await clienteAxios.post('/api/Login', datos)
            localStorage.setItem('AUTH_TOKEN', data.token)
            
            await mutate()
        } catch (error) {
            console.log(error.response.data.errors)
        }
    }

    console.log(user)
    console.log(error)
    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            Navegacion(url)
        }
        if(middleware === 'auth' && error) {
            Navegacion('/')
        }
    },[user,error])

    return {
        login,
        user,
        error,
    }
}

export default useAuth;
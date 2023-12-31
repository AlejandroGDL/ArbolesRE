import useAuth from "../hook/UseAuth"
import Menu from "../views/Menu"

export default function AuthLayout() {
    const {user,error} = useAuth({middleware: 'auth'});
    return(
        <Menu/>
    )
}

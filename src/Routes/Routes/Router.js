import { useRoutes } from "react-router-dom"
import RoutesConfig from "../ConfigRoute"

const AllRoutes =()=> {
    return useRoutes(RoutesConfig)
}

export default AllRoutes
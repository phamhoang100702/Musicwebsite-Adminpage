import User from "../../Component/User/User"
import Singer from "../../Component/Singer/Singer"
import Song from "../../Component/Song/Song"
import Censor from "../../Component/Censor/Censor"
import Statistical from "../../Component/Statistical/Statistical"
import { Route } from "react-router-dom"

const RoutesConfig = [
    {
        path:"/user",
        element:<User/>
    },
    {
        path:"/singer",
        element:<Singer/>
    },
    {
        path:"/censor",
        element:<Censor/>
    },
    {
        path:"/song",
        element:<Song/>
    },
    {
        path:"/singer",
        element:<Singer/>
    },
    {
        path:"/statistical",
        element :<Statistical/>
    }
]

export default RoutesConfig;
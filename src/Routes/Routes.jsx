import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path : '/',
            element : <HomeLayouts></HomeLayouts>,
            children :[
                {
                    path : '',
                    element :<Home></Home>
                },
                {
                    path : '/category/:id',
                    element :<CategoryNews></CategoryNews>
                }
            ]
        },
        {
            path : '/auth',
            element : <h2>Authentication layout</h2>
        },
        {
            path : '/news',
            element : <h2>news Layout</h2>
        },
        {
            path : '/*',
            element : <h2>error 404</h2>
        },
    ]
)
 export default router ;
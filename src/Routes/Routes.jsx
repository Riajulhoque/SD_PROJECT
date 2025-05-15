import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";

import PrivateRoute from "../Provider/PrivateRoute";
import NewsDetails from "../Components/NewsDetails";
import Loading from "../Components/Pages/Loading";

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
                    element :<CategoryNews></CategoryNews>,
                    loader : () =>fetch('/news.json'),
                    hydrateFallbackElement :<Loading></Loading>
                    

                }
            ]
        },
        {
            path : '/auth',
            element : <AuthLayouts></AuthLayouts>,
            children : [
                {
                    path : '/auth/login',
                    element : <Login></Login>
                },
                {
                    path : '/auth/register',
                    element : <Register></Register>
                }
            ]
        },
        {
            path : '/news-details/:id',
            element :( <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>) ,
            loader : () => fetch('/news.json') ,
             hydrateFallbackElement :<Loading></Loading>
        },
        {
            path : '/*',
            element : <h2>error 404</h2>
        },
       
    ]
)
 export default router ;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Signup from "../components/Signup";
import Login from "../components/Login";
import AboutUs from "../components/AboutUs";
import UpdateProfile from "../pages/Dashboard/user/UpdateProfile";
import CartPage from "../pages/menu/CartPage";

const router = createBrowserRouter([
    {
      //Home route
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>

            },
            
            {
              path: "/menu",
              element: <Menu/>

            },

            {
              path: "/cart-page",
              element: <CartPage/>
            },

            {
              path: "/update-profile",
              element: <UpdateProfile/>

            },

            {
              path: "/about-us",
              element: <AboutUs /> 
            },

           

            
        ]
    },

    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },
  ]);

export default router;
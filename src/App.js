import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = () => {
  return (
    <div className="app">     
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[{
      path:"/",
      element:<Body/>,
      errorElement:<Error/>
  
    },
    {
      path:"/about",
      element:<About/>,
      errorElement:<Error/>
  
    },
    {
      path:"/contact",
      element:<ContactUs/>,
      errorElement:<Error/>
  
    },
    {
      path:"/cart",
      element:<Cart/>,
      errorElement:<Error/>
  
    },{
      path:"/restaurant/:resid",
      element:<RestaurantMenu/>
    }],
    errorElement:<Error/>

  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


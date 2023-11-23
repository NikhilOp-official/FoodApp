import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">     
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[{
      path:"/",
      element:<Body/>,
  
  
    },
    {
      path:"/about",
      element:<About/>,
    
  
    },
    {
      path:"/contact",
      element:<ContactUs/>,
     
  
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
     
  
    },
    {
      path:"/cart",
      element:<Cart/>,
     
  
    },{
      path:"/restaurant/:resid",
      element:<RestaurantMenu/>
    }],
    errorElement:<Error/>

  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


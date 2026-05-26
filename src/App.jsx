import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Service from "./pages/Service";
import About from "./pages/About";
 const router= createBrowserRouter([{
  path:"/",
  element:<RouteLayout/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:":id",
      element:<ProductDetail/>
    },
    {
      path:"service",
      element: <Service/>,
    },
    {
      path:"accessories",
      element: <h3>Accessory</h3>,
    },
    {
      path:"about",
      element: <About/>,
    },
  ]
 }]);

function App() {

  return (
    <>
    <RouterProvider router={router}>
      
    </RouterProvider>
    </>
  )
  
}

export default App

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

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
      element: <h3>Service</h3>,
    },
    {
      path:"accessories",
      element: <h3>Accessory</h3>,
    },
    {
      path:"about",
      element: <h3>About</h3>,
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

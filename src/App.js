import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login } from "./pages";




function App() {

  const routers = useMemo(()=> createBrowserRouter([
    {
       path:'/',
       element: <Login/>
    },

    {
      path:'/dashboard',
      element: <Home />
   },

  ]),[]);

  return (

    <div className="App">
      <RouterProvider router={routers} />
      </div>
   
  );

}

export default App;

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import CategorieService from "./pages/CategorieService";
import ServiceSpecifique from "./pages/ServiceSpecifique";

const App = () => {
  const routes = [
    {
      path: '',
      element: <Layout />,
      children: [
        { 
          index: true,
          element: <Navigate to='home' replace/>
        },
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'service',
          element: <Service />,
          children: [
            {
              path: ':id',
              element: <CategorieService />,
              children: [
                {
                  path: ':id',
                  element: <ServiceSpecifique />
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "*",
      element: (
        <Navigate to='/home' replace />
      ),
    },
  ]
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
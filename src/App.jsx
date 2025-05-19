import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import First from './First';
import HireMe from './Pages/HireMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/HireMe",
        element: <HireMe/>
      }
    ],
  }
]);
function App() {

  return <RouterProvider router={router}/>;
    
}

export default App;

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import First from './First';

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
        path: "/About",
        element: <About/>
      }
    ],
  }
]);
function App() {

  return <RouterProvider router={router}/>;
    
}

export default App;

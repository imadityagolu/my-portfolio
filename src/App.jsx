import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import First from './First';
import Contact from "./Pages/Contact";
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'
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
        path: "/About",
        element: <About/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Skills",
        element: <Skills/>
      },
      {
        path: "/HireMe",
        element: <HireMe/>
      },
      {
        path: "/Projects",
        element: <Projects/>
      }
    ],
  }
]);
function App() {

  return <RouterProvider router={router}/>;
    
}

export default App;

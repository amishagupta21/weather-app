import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPageResult from './pages/MainPageResult';
import WeatherPageResult from "./pages/WeatherPageResult";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPageResult/>,
  },
  {
    path: "/place",
    element: <WeatherPageResult/>,
  }
]);

function App() {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  );
}

export default App; 

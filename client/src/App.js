import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {ROUTES} from './Roots/routes'

const router=createBrowserRouter(ROUTES)


function App() {
  return (
    <>
<RouterProvider router={router}/>
    </>
  );
}

export default App;

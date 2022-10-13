import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Topics from './components/topics/Topics';
import Home from './components/Home/Home';
import Statistics from './components/statistics/Statistics';
import Blog from './components/Blog/Blog';
import RouteNotFound from './components/routeNotFound/RouteNotFound';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/topics',
          element:<Topics></Topics>
        },
        {
        path:'/statistics',
        element:<Statistics></Statistics>
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        
      ],
    },
    {
      path:'/*',
      element:<RouteNotFound></RouteNotFound>
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/EsquissesDeNur/',
          element: <Home />,
        },
        {
          path: '/EsquissesDeNur/portfolio',
          element: <Portfolio />,
        },

        {
          path: '/EsquissesDeNur/contact',
          element: <Contact />,
        },
        {
          path: '/EsquissesDeNur/about',
          element: <About />,
        },

        {
          path: '/EsquissesDeNur/blog',
          element: <Blog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

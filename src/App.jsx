import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Thankyou from './pages/Thankyou';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },

        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/about',
          element: <About />,
        },

        {
          path: '/blog',
          element: <Blog />,
        },

        {
          path: '/thanksforcontacting',
          element: <Thankyou />,
        },
      ],
    },
  ]);
  router.subscribe((location) => {
    window.scrollTo(0, 0);
  });
  return <RouterProvider router={router} />;
}

export default App;

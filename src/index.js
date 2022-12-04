import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import AlbumApp from './components/AlbumApp'
import Projects from './routes/Projects';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Projects />},
            {
                path: "about",
                element: <>This will be an about page</>
            }
        ],
    },
    {
        path: "album-app",
        element: <AlbumApp />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
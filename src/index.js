import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
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
            },
            {
                path: "site-redesign",
                element: <>This will be a page about responsive redesign</>
            },
            {
                path: "album-app",
                element: <>This will be a page about the album app</>
            },
            {
                path: "designing-roomkast",
                element: <>This will be a page about designing roomkast</>
            },
        ],
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
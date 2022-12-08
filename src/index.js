import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import './index.css';
import Root from './routes/Root';
import Projects from './routes/Projects';
import RoomkastApp from './routes/RoomkastApp';

const router = createHashRouter([
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
                path: "roomkast-app",
                element: <RoomkastApp />
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
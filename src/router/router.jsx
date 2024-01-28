import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);
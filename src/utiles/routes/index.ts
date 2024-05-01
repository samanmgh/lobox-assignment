import {lazy} from 'react';
import {createBrowserRouter} from "react-router-dom";
const AppLayout = lazy(() => import('../../layout/AppLayout'));
const Landing = lazy(() => import('../../pages/Landing'));
const Routes = createBrowserRouter([
    {
        Component: AppLayout,
        children: [
            {
                path: '/',
                Component: Landing,
            },
        ],
    },
]);

export default Routes;

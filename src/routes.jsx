import {createBrowserRouter} from 'react-router-dom';

import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/Menu',
        element: <AuthLayout />
    }
]);

export default router;
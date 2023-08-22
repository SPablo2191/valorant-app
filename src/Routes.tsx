import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/HomeComponent'
import { AgentPage } from './pages/agents/AgentComponent'
import { ErrorPage } from './pages/error/ErrorComponent';
import { MainLayout } from './project/layouts/MainLayout/MainLayoutComponent';

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            { path: '', element: <HomePage /> },
            {path: '/agents',element : <AgentPage/>},
        ]
    },
    {path: '*', element: <ErrorPage/>}
]);
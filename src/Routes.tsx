import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home/HomeComponent'
import { MainLayout } from './layouts/MainLayout/MainLayoutComponent'

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage /> }
        ]
    },
])
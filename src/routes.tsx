import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/index'
import { Detail } from './pages/detail/index'
import { Notfound } from './pages/notfound/index'

import { Layout } from './components/layout/index'

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/detail/:cripto",
                element: <Detail/>
            },
            {
                path: "*",
                element: <Notfound/>
            }
        ]
    }
])

export { router }
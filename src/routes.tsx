import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/index'
import { Detail } from './pages/detail/index'
import { Notfound } from './pages/notfound/index'

const router = createBrowserRouter([
    {
        children:[
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export { router }
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Layout = lazy(() => import('@/pages/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Count = lazy(() => import('@/pages/Count'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'count',
        element: <Count />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

const RenderRouter = () => {
  const element = useRoutes(routes)
  return element
}

export default RenderRouter

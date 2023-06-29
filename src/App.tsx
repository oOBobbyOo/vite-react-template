import { FC, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRouter from './routes'
import Loading from '@/components/Loading'

const AppRouter: FC<{ children?: JSX.Element }> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Router basename="/">{children}</Router>
    </Suspense>
  )
}

function App() {
  return (
    <AppRouter>
      <RenderRouter />
    </AppRouter>
  )
}

export default App

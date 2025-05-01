import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroProvider } from '@/Provider.tsx'
import { Accounts } from './pages/Accounts'
import { Dashboard } from './pages/Dashboard'
import { RoutesEnum } from '@/utils/enums/routes.enum'
import { Layout } from './components/layout/Layout'
import './styles/global.css'

function App() {
  return (
    <HeroProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={RoutesEnum.Dashboard} />} />
          <Route element={<Accounts />} path={RoutesEnum.Accounts} />
          <Route element={<Dashboard />} path={RoutesEnum.Dashboard} />
        </Routes>
      </Layout>
    </HeroProvider>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroProvider } from '@/Provider.tsx'
import { Accounts } from './pages/Accounts'
import { Dashboard } from './pages/Dashboard'
import { RoutesEnum } from '@/utils/enums/routes.enum'
import { Layout } from './components/layout/Layout'
import { PlaceholderPage } from './pages/PlaceholderPage'
import './styles/global.css'

function App() {
  return (
    <HeroProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={RoutesEnum.Dashboard} />} />
          <Route element={<Accounts />} path={RoutesEnum.Accounts} />
          <Route element={<Dashboard />} path={RoutesEnum.Dashboard} />

          {/* All other routes will show the placeholder */}
          <Route element={<PlaceholderPage />} path="/brokers" />
          <Route element={<PlaceholderPage />} path="/submissions" />
          <Route element={<PlaceholderPage />} path="/organizations" />
          <Route element={<PlaceholderPage />} path="/goals" />
          <Route element={<PlaceholderPage />} path="/admin" />
          <Route element={<PlaceholderPage />} path="/admin2" />
          <Route element={<PlaceholderPage />} path="/admin3" />
          <Route element={<PlaceholderPage />} path="/admin4" />
          <Route element={<PlaceholderPage />} path="/admin5" />
          <Route element={<PlaceholderPage />} path="/admin6" />
          <Route element={<PlaceholderPage />} path="/admin7" />
          <Route element={<PlaceholderPage />} path="/admin8" />
        </Routes>
      </Layout>
    </HeroProvider>
  )
}

export default App

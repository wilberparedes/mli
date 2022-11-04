import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Dashboard } from './modules/dashboard/dashboard.component'
import { GlobalStyle } from './styles/global.style'
export const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Dashboard />
    </BrowserRouter>
  )
}

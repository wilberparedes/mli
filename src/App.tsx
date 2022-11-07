import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import { ApiProvider } from './contexts/apiProvider/apiProvider'
import { MainRoutes } from './routes'
import { GlobalStyle } from './styles/global.style'
import { queryClient } from './react-query/react-query.client'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <MainRoutes />
        </QueryClientProvider>
      </ApiProvider>
    </BrowserRouter>
  )
}

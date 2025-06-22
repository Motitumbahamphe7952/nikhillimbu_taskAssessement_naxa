import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { Store } from './Store/Store'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/QueryClient'

function RoutesWrapper() {
  const routes = useRoutes(AppRoutes);
  return routes;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)

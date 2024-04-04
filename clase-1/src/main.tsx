import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { ThemeConfig } from './config/theme.config';
import { NotificationProvider } from './context/NotificationProdiver'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeConfig>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </ThemeConfig>
  </React.StrictMode>,
)

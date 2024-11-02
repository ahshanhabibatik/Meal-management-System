import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/router.jsx';


import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className='mx-2'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UploadProvider } from "./context/UploadContext";
import { UserProvider } from "./context/UserContext";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <UploadProvider>
    <App />
    </UploadProvider>
    </UserProvider>
  </StrictMode>,
)

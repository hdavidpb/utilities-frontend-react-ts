import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import UtilitiesContextProvider from './app/context/UtilitiesContextProvider'

createRoot(document.getElementById('root')!).render(
  <UtilitiesContextProvider>
    <App />
  </UtilitiesContextProvider>,
)

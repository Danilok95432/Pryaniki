import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={ store }>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)

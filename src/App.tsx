import './App.css'
import LoginPage from './Components/login/LoginPage'
import MainPage from './Components/main/MainPage'
import Overlay from './Components/modal/Overlay'
import type { RootState } from './store/store'
import { useSelector } from 'react-redux'

function App() {
  const status = useSelector((state: RootState) => state.login.status)
  const modalStatus = useSelector((state: RootState) => state.modal.modalStatus)

  console.log(modalStatus)
  
  return (
    <>
      {
        status ?
        <>
          <MainPage />
          {
            modalStatus != '' ?
            <Overlay />
            :
            null
          }
        </>
        :
        <LoginPage />
      }
    </>
  )
}

export default App

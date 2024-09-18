import { useDispatch, useSelector } from "react-redux"
import { deleteNote, getTable } from "../../requests/requests.module"
import { RootState } from "../../store/store"
import { useEffect, useState } from "react"
import Table from "../table/Table"
import styles from './MainPage.module.css'
import { setModalStatus } from "../../store/modal"
import { changeStatus, setToken } from "../../store/login"
import { setTable } from "../../store/table"

const MainPage = () => {

  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const token = useSelector((state: RootState) => state.login.token)
  const selectedRow = useSelector((state: RootState) => state.table.selectedRow)
  const modalStatus = useSelector((state: RootState) => state.modal.modalStatus)
  const table = useSelector((state: RootState) => state.table.table)
  
  useEffect(() => {
    const refreshTableData = async() => {
      const result = await getTable(token)
      dispatch(setTable(result.data.data))
    }

    refreshTableData()
  }, [token, refresh, modalStatus])

  return(
    <div className={styles.main}>
      <div className={styles.controls}>
        <button 
          className={styles.control} 
          onClick={() => dispatch(setModalStatus("create")) }
        >
          Добавить
        </button>
        <button 
          className={selectedRow != '' ? styles.control : styles.disable}
          onClick={() => { deleteNote(token, selectedRow); setRefresh(!refresh) }}
        >
          Удалить
        </button>
        <button
          className={selectedRow != '' ? styles.control : styles.disable}
          onClick={() => dispatch(setModalStatus("edit")) }
        >
            Редактировать
        </button>
        <button
          className={styles.control}
          onClick={() => { dispatch(setToken('')); dispatch(changeStatus(false)) }}
        >
          Logout
        </button>
      </div>
      <Table data={table} />
    </div>
  )
}

export default MainPage

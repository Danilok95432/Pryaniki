import styles from './Modal.module.css'
import Modal from './Modal'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import ModalEdit from './ModalEdit'

const Overlay = () => {

  const modalStatus = useSelector((state: RootState) => state.modal.modalStatus)
  const selectedRow = useSelector((state: RootState) => state.table.selectedRow)
  const table = useSelector((state: RootState) => state.table.table)

  const editRow = table.filter((elem: any) => elem.id == selectedRow)

  return(
    <div className={styles.overlay}>
      {
        modalStatus == 'create' ?
        <Modal />
        :
        <ModalEdit row={editRow[0]}/>
      }
    </div>
  )
}

export default Overlay

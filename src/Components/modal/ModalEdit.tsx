import { useDispatch, useSelector } from 'react-redux'
import styles from './Modal.module.css'
import { Button, CircularProgress, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { editNote } from '../../requests/requests.module'
import { RootState } from '../../store/store'
import { clearAllFields, setCompanySigDate, setCompanySignatureName, setDocumentName, setDocumentStatus, setDocumentType, setEmployeeNumber, setEmployeeSigDate, setEmployeeSignatureName, setModalStatus } from '../../store/modal'
import dayjs from 'dayjs'

const ModalEdit = (props: any) => {
  const token = useSelector((state: RootState) => state.login.token)
  const selectedRow = useSelector((state: RootState) => state.table.selectedRow)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCompanySigDate(dayjs(props.row.companySigDate).format('YYYY-MM-DD')))
    dispatch(setCompanySignatureName(props.row.companySignatureName))
    dispatch(setDocumentName(props.row.documentName))
    dispatch(setDocumentStatus(props.row.documentStatus))
    dispatch(setDocumentType(props.row.documentType))
    dispatch(setEmployeeNumber(props.row.employeeNumber))
    dispatch(setEmployeeSigDate(dayjs(props.row.employeeSigDate).format('YYYY-MM-DD')))
    dispatch(setEmployeeSignatureName(props.row.employeeSignatureName))
  }, [selectedRow])

  const [loading, setLoading] = useState(false)

  const companySigDate = useSelector((state: RootState) => state.modal.companySigDate)
  const companySignatureName = useSelector((state: RootState) => state.modal.companySignatureName)
  const documentName = useSelector((state: RootState) => state.modal.documentName)
  const documentStatus = useSelector((state: RootState) => state.modal.documentStatus)
  const documentType = useSelector((state: RootState) => state.modal.documentType)
  const employeeNumber = useSelector((state: RootState) => state.modal.employeeNumber)
  const employeeSigDate = useSelector((state: RootState) => state.modal.employeeSigDate)
  const employeeSignatureName = useSelector((state: RootState) => state.modal.employeeSignatureName)

  const handleAction = async () => {
    setLoading(true);

    try {
      const obj = {
        companySigDate: companySigDate,
        companySignatureName: companySignatureName,
        documentName: documentName,
        documentStatus: documentStatus,
        documentType: documentType,
        employeeNumber: employeeNumber,
        employeeSigDate: employeeSigDate,
        employeeSignatureName: employeeSignatureName
      }
      if(Object.values(obj).filter((elem: string) => elem === '').length != 0)
        {
          alert('Заполните все поля')
        }
        else {
        const response = await editNote(token, selectedRow, obj).then(res => res.data)
        if(response.data){
          dispatch(setModalStatus(''))
          dispatch(clearAllFields())
        }
        else{
          alert('Произошла ошибка при обработке запроса: ' + response.error_text)
        }
      }
    } catch (error) {
      alert('Произошла ошибка при обработке запроса');
    }

    setLoading(false);
  };

  return(
    <div className={styles.modal}>
      <div 
        className={styles.close_btn}
        onClick={() => { 
          dispatch(setModalStatus(''))
          dispatch(clearAllFields())
        }
      }
      ></div>
      <form className={styles.form}>
        <div className={styles.groups}>
          <div className={styles.group}>
            <input
              className={styles.date_picker} 
              type="date" 
              value={companySigDate} 
              onChange={(e) => dispatch(setCompanySigDate(e.target.value))}
            />
            <TextField
              label="companySignatureName"
              required
              value={companySignatureName}
              onChange={(e) => dispatch(setCompanySignatureName((e.target.value)))}
            />
            <TextField
              label="documentName"
              required
              value={documentName}
              onChange={(e) => dispatch(setDocumentName((e.target.value)))}
            />
            <TextField
              label="documentStatus"
              required
              value={documentStatus}
              onChange={(e) => dispatch(setDocumentStatus((e.target.value)))}
            />
          </div>
          <div className={styles.group}>
            <input
              className={styles.date_picker} 
              type="date" 
              value={employeeSigDate} 
              onChange={(e) => dispatch(setEmployeeSigDate(e.target.value))}
            />
            <TextField
              label="documentType"
              required
              value={documentType}
              onChange={(e) => dispatch(setDocumentType((e.target.value)))}
            />
            <TextField
              label="employeeNumber"
              required
              value={employeeNumber}
              onChange={(e) => dispatch(setEmployeeNumber((e.target.value)))}
            />
            <TextField
              label="employeeSignatureName"
              required
              value={employeeSignatureName}
              onChange={(e) => dispatch(setEmployeeSignatureName((e.target.value)))}
            />
          </div>
        </div>
        <Button 
          className={styles.submit}
          onClick={() => handleAction()}
        >
          {loading ? <CircularProgress size={24} /> : 'Подтвердить'}
        </Button>
      </form>
    </div>
  )
}

export default ModalEdit

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import styles from './Table.module.css'
import { setSelectedRow } from '../../store/table'
import { useDispatch } from 'react-redux'

const Table = (props: any) => {
  const dispatch = useDispatch()
  const keys = props.data[0] ? Object.keys(props.data[0]).filter((elem) => elem != "id").sort((a,b) => a.localeCompare(b)) : []
  const columnsKeys = keys.map((elem: any) => {
    return { field: `${elem}`, headerName: `${elem}`, width: window.innerWidth/keys.length }
  })
  const columns: GridColDef<(typeof rows)[number]>[] = columnsKeys

  const rows = [...props.data]

  console.log(props.data)

  return(
    <div className={styles.table}>
      <DataGrid 
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        disableMultipleRowSelection
        onRowSelectionModelChange={(e) => dispatch(setSelectedRow(e.toString()))}
      />
    </div>
  )
}

export default Table
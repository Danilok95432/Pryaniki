import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface modalState {
  modalStatus: string
  companySigDate: string, 
  companySignatureName: string, 
  documentName: string, 
  documentStatus: string, 
  documentType: string, 
  employeeNumber: string, 
  employeeSigDate: string, 
  employeeSignatureName: string
}

const initialState: modalState = {
  modalStatus: '',
  companySigDate: "", 
  companySignatureName: "", 
  documentName: "", 
  documentStatus: "", 
  documentType: "", 
  employeeNumber: "", 
  employeeSigDate: "", 
  employeeSignatureName: ""
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalStatus: (state, action: PayloadAction<string>) => {
      state.modalStatus = action.payload
    },
    setCompanySigDate: (state, action: PayloadAction<string>) => {
      state.companySigDate = action.payload
    },
    setCompanySignatureName: (state, action: PayloadAction<string>) => {
      state.companySignatureName = action.payload
    },
    setDocumentName: (state, action: PayloadAction<string>) => {
      state.documentName = action.payload
    },
    setDocumentStatus: (state, action: PayloadAction<string>) => {
      state.documentStatus = action.payload
    },
    setDocumentType: (state, action: PayloadAction<string>) => {
      state.documentType = action.payload
    },
    setEmployeeNumber: (state, action: PayloadAction<string>) => {
      state.employeeNumber = action.payload
    },
    setEmployeeSigDate: (state, action: PayloadAction<string>) => {
      state.employeeSigDate = action.payload
    },
    setEmployeeSignatureName: (state, action: PayloadAction<string>) => {
      state.employeeSignatureName = action.payload
    },
    clearAllFields: (state) => {
      state.companySigDate = ''
      state.companySignatureName = ''
      state.documentName = ''
      state.documentStatus = ''
      state.documentType = ''
      state.employeeNumber = ''
      state.employeeSigDate = ''
      state.employeeSignatureName = ''
    }
  },
})

export const { setModalStatus, setCompanySigDate, setCompanySignatureName, 
               setDocumentName, setDocumentStatus, setDocumentType, 
               setEmployeeNumber, setEmployeeSigDate, setEmployeeSignatureName, clearAllFields } = modalSlice.actions

export default modalSlice.reducer

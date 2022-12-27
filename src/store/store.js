import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import bankReducer from './slices/banks/bankSlice';
import transferReducer from './slices/transfers/transferSlice';
import serviceAndConceptReducer from './slices/servicesAndConcepts/servicesAndConceptsSlice';
import identificationReducer from './slices/identifications/identificationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bank: bankReducer,
    transfer: transferReducer,
    serviceAndConcept: serviceAndConceptReducer,
    identification: identificationReducer
  }
})
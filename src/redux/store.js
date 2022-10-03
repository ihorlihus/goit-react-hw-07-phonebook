import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../redux/filterSlice';
import { contactsReducer } from './contSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    isLoading: false,
    error: null
  }

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push({
        name: payload.name,
        number: payload.number,
      });
    },
    delContact(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, delContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;

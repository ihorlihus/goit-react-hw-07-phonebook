import { createSelector } from '@reduxjs/toolkit';

const selectFilterValue = state => state.filter.value;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltredContakts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filtredContacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtredContacts)
    )
);

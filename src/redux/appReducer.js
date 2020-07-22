import {SHOW_LOADER, HIDE_LOADER, SHOW_MODAL, HIDE_MODAL} from "./types";

const initialState = {
  modalWindow: false,
  loading: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER:
      return {...state, loading: false};
    case SHOW_MODAL:
      return {...state, modalWindow: true};
    case HIDE_MODAL:
      return {...state, modalWindow: false};
    default:
      return state
  }
};
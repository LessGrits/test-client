import {
  CREATE_HOTDOG,
  DELETE_HOTDOG,
  FETCH_HOTDOGS,
  HIDE_LOADER,
  SHOW_LOADER,
  UPDATE_HOTDOG,
  HIDE_MODAL,
  SHOW_MODAL
} from "./types";

const url = "https://we-are-the-future-test-server.herokuapp.com/hotdogs";

export const createHotdog = (newHotdog) => async dispatch => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newHotdog)
    });
    dispatch({type: CREATE_HOTDOG, payload: newHotdog});
    dispatch(hideModal());
  } catch (error) {
    console.error(error);
  }

};

export const fetchHotdogs = () => async dispatch => {
  dispatch(showLoader());
  const response = await fetch(url);
  const jsonData = await response.json();
  dispatch({type: FETCH_HOTDOGS, payload: jsonData});
  dispatch(hideLoader());
};

export const deleteHotdog = (id) => async dispatch => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE"
    });
    dispatch({type: DELETE_HOTDOG, payload: id})
  } catch (error) {
    console.error(error);
  }
};

export const updateHotdog = (hotdogData, id) => async dispatch => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(hotdogData)
    });
    dispatch({type: UPDATE_HOTDOG, payload: {id, hotdogData}})
  } catch (error) {
    console.error(error)
  }
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
};

export const showModal = () => {
  return {
    type: SHOW_MODAL
  }
};

export const hideModal = () => ({
  type: HIDE_MODAL
});


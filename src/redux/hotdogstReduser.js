import {CREATE_HOTDOG, FETCH_HOTDOGS, DELETE_HOTDOG, UPDATE_HOTDOG} from "./types";

const initialState = {
  hotdogs: [],
};


export const hotdogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HOTDOG:
      return {hotdogs: [...state.hotdogs, action.payload]};
    case FETCH_HOTDOGS:
      return {hotdogs: action.payload};
    case DELETE_HOTDOG:
      return {hotdogs: state.hotdogs.filter(hotdog => hotdog.hotdog_id !== action.payload)};
    case UPDATE_HOTDOG:
      return {
        hotdogs: state.hotdogs.map(
          hotdog => {
            if (hotdog.hotdog_id === action.payload.id) {
              return action.payload.hotdogData
            }
            return hotdog
          }
        )
      };
    default:
      return state;
  }
};
import { TOGGLE_THEME } from "./types";

export const themeReducer = (state = { theme: false }, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
};

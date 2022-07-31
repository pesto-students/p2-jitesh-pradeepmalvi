import { TOGGLE_THEME } from "./types";

export const changeTheme = data => dispatch => {
  dispatch({ type: TOGGLE_THEME, payload: data });
};

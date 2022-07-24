import { ADD_STEP, RESET_STEP } from "./types";

export const themeReducer = (state = { steps: 0 }, action) => {
  switch (action.type) {
    case ADD_STEP:
      return { steps: state.steps + 1 };
    case RESET_STEP:
      return { steps: 0 };
    default:
      return state;
  }
};

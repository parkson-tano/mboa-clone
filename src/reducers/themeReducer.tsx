import { Reducer } from "redux";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeReducer: Reducer<ThemeState> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default themeReducer;

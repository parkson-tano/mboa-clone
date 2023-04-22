import { Reducer } from "redux";

interface LanguageState {
    english: boolean;
}

const initialState: LanguageState = {
  english: true,
};

const languageReducer: Reducer<LanguageState> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default languageReducer;

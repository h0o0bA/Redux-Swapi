import {
  FETCHING,
  SUCCESS,
  FAILURE
} from "../actions"; /* we need our action types here*/
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isloading: false,
  success: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        characters: [],
        isloading: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: true
      };
    case FAILURE:
      return {
        ...state,
        characters: action.payload,
        isloading: false,
        success: false
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

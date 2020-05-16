import {
  BuilderAction,
  SET_NAME_VALUE,
  SET_GREETINGS_MESSAGE,
} from "../actions";

interface BuilderState {
  name: string;
  message: string;
}

const defaultState = {
  name: "Warren",
  message: "Hello",
};

const builderReducers = (
  state: BuilderState = defaultState,
  action: BuilderAction
): BuilderState => {
  switch (action.type) {
    case SET_NAME_VALUE: {
      return { ...state, name: action.payload.name };
    }
    case SET_GREETINGS_MESSAGE: {
      return { ...state, message: action.payload.message };
    }
    default:
      return state;
  }
};

export default builderReducers;

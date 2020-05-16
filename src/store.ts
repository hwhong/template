import { combineReducers, createStore } from "redux";
import builderReducers from "./builder/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  builder: builderReducers,
});

export type StateType = ReturnType<typeof rootReducer>;
export default createStore(rootReducer, devToolsEnhancer({}));

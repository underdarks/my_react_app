import { combineReducers } from "redux";
import myCounterReducer from "./CounterReducer";

//여러가지 리듀서들을 하나로 합쳐서 관리한다고 이해하시면 됩니다.
const rootReducer = combineReducers({
  myCounterReducer,
  // todoReducer,
  // userReducer,
  // OrderReducer
});

export default rootReducer;

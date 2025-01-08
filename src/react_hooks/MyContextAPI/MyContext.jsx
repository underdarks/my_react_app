import React, { createContext, useReducer } from "react";
import DisplayCount from "./DisplayCount";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

//1. createContext를 사용해서 새로운 Context 객체를 생성
export const MyStateContext = createContext();

/**
 * count라는 값을 전역적으로 관리를하는 역할
 */
const MyContext = () => {
  //2. 상태를 관리
  const [state, dispatch] = useReducer(counterReducer, 150);

  //3. 상태값을 다른 모든 컴포넌트에게 사용할 수 있도록 설정(전역적)
  return (
    <div>
      <MyStateContext.Provider value={state}>
        {/* 여기에 상태값을 전역적으로 사용하고 싶은 컴포넌트들을 선언해주시면됩니다. */}
        <DisplayCount />
      </MyStateContext.Provider>
    </div>
  );
};

export default MyContext;

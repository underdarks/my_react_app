import React, { useReducer, useState } from "react";

//리듀서 함수(순수 함수, 불변성)
//상태값을 반환해주는 함수
function myReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1; //10 + 1 = 11을 리턴
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

/**
 * 카운터를 useReducer관리하는 컴포넌트
 */
const MyReducer = () => {
  const [state, dispatch] = useReducer(myReducer, 10);
  // const [count, setCount] = useState(10);

  //+1을 해주는 함수
  const onIncrease = () => {
    const action = { type: "INCREMENT" };
    dispatch(action); //1
  };

  //-1을 해주는 함수
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>state 값: {state}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default MyReducer;

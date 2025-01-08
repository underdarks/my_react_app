import React from "react";
import { useSelector } from "react-redux";

const CounterComponents = () => {
  const { number } = useSelector((state) => ({
    number: state.myCounterReducer.count,
  }));

  return (
    <div>
      <h1>리덕스로 관리하는 state 값 : {number}</h1>
    </div>
  );
};

export default CounterComponents;

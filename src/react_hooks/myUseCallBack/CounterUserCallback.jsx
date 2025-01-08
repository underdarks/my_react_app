import React, { useState, useCallback } from "react";

// 자식 컴포넌트
const CounterButton = React.memo(({ onClick, countz, color }) => {
  console.log("자식 CounterButton 렌더링...");
  return (
    <div>
      <button onClick={onClick}>자식 버튼 클릭 {countz} 회</button>
    </div>
  );
});

const CounterButton2 = ({ onClick, count }) => {
  console.log("자식 CounterButton2 렌더링...");
  return <button onClick={onClick}>자식 버튼 클릭 {count} 회</button>;
};

// 부모 컴포넌트
const CounterUserCallback = () => {
  console.log("부모 컴포넌트 렌더링..");
  //count는 자식컴포넌트에게 props로 넘깁니다.
  const [count, setCount] = useState(0);

  //number는 부모 컴포넌트에게 관리하는 state입니다.
  const [number, setNumber] = useState(0);

  const handleClick = useCallback(() => {
    console.log("handleClick 호출");

    setCount((prevCount) => prevCount + 1);
  }, []); // 의존성 배열이 빈 배열이므로 처음 렌더링 시에만 생성됨

  // 다른 상태 변경 함수
  const handleOtherStateChange = () => {
    console.log("handleOtherStateChange 호출");
    setNumber((prev) => prev + 1);
  };

  /**
   * 부모 컴포넌트의 값이 변경되면, 자식 컴포넌트가 리렌더링이 됩니다
   */
  return (
    <div>
      <h1>Count: {count}</h1>
      <CounterButton onClick={handleClick} counts={count} color={"red"} />
      <button onClick={handleOtherStateChange}>
        부모 숫자 상태값: {number}
      </button>
    </div>
  );
};

export default CounterUserCallback;

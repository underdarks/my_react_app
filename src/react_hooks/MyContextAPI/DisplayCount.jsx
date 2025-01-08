import React, { useContext } from "react";
import { MyStateContext } from "./MyContext";

/**
 * 해당 컴포넌트는 MyContext에 있는 state값을 조회해서 렌더링할게요
 */
const DisplayCount = () => {
  //전역적으로 관리되는 상태값을 조회하고있습니다.
  const state = useContext(MyStateContext);

  return (
    <div>
      <h1>전역적으로 관리하는 state 값 : {state - 100}</h1>
    </div>
  );
};

export default DisplayCount;

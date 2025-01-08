import { useRef, useState } from "react";

const RefSample = () => {
  const inputRef = useRef(null);
  const [state, setState] = useState(0);
  const value = useRef(0);

  const handleClick = () => {
    inputRef.current.focus();
    value.current += 1; // 0+1 = 1
    console.log("uesRef Value :", value); //?
    setState(state + 1); // 0+1 = 1
    console.log("state :", state); //?
  };

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>인풋에 포커싱하기</button>
    </>
  );
};

export default RefSample;

//친구한테 받는 물건
function Counter(props) {
  //이벤트 핸들러 함수
  //좋은 표현

  //+1을 누르면 알림창
  const addHandler = () => {
    alert("1을 더했어요!");
  };

  //-1을 누르면 알림창
  const subHandler = () => {
    alert("1을 뺏어요!");
  };

  //JSX 문법
  return (
    <div>
      <h1>친구가 보내준 pmp는 {props.pmp}</h1>
      <h1>친구가 보내준 mp3는 {props.mp3}</h1>
      <h1>
        {props.mp3 === "아이리버" ? (
          <h1>너가 그냥 써도되</h1>
        ) : (
          <h1>고마워 잘쓸게</h1>
        )}
      </h1>

      {/* <h1>안녕 리엑트</h1>
      <h2>리액트 반가워</h2>
      <button onClick={addHandler}>+1</button>
      <button onClick={subHandler}>-1</button> */}
    </div>
  );
}

export default Counter;

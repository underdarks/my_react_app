import "./App.css";
import CounterComponents from "./myRedux/CounterComponents";
import MyContext from "./react_hooks/MyContextAPI/MyContext";

//맨처음 시작하는 컴포넌트(할머니,할아버지 급 컴포넌트)
function App() {
  //jsx
  //js 파일안에 html을 쓸수있게 해줍니다.
  return (
    <div>
      <CounterComponents />
    </div>
  );
}

export default App;

//액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => {
  return { type: DECREASE };
};

//초기값
const initState = {
  count: 1000,
};

//리듀서 구성
export default function myCounterReducer(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

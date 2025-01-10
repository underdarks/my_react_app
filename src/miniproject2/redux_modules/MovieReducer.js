//액션
const POPULAR_MOVIE = "MOVIE/POPULAR_MOVIE";

//액션 생성 함수
export const popularMovieAction = (datas) => ({
  type: POPULAR_MOVIE,
  data: datas,
});

//초기값
const initState = [];

//리듀서
export default function movieReducer(state = initState, action) {
  switch (action.type) {
    case POPULAR_MOVIE:
      return [...state, ...action.data];
    default:
      return state;
  }
}

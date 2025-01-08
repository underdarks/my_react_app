import React, { useEffect, useState } from "react";

const Movie = () => {
  console.log("1. Moive 컴포넌트 렌더링...");
  const [movie, setMovie] = useState({
    title: "Venom",
    Date: new Date(),
    score: 4.3,
  });
  console.log("2. useState 완성!");

  //처음에 컴포넌트가 렌더링시 호출됩니다.
  useEffect(() => {
    // alert("나는 useEffect야");
    console.log("3. useEffect 콜백함수 호출");
    setMovie({});
  }, []);

  return (
    <div>
      <h1>영화리스트</h1>
      <h2>영화 제목 : {movie.title}</h2>
      <h2>영화 개봉일 : {movie.Date?.toLocaleDateString()}</h2>
      <h2>영화 평점 : {movie.score}</h2>
    </div>
  );
};

export default Movie;

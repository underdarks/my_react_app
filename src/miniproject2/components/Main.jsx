import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import axios from "axios";
import { useDispatch } from "react-redux";
import { popularMovieAction } from "../redux_modules/MovieReducer";
import PopularMovie from "./PopularMovie";

const Main = () => {
  const APIKEY = "4879c8b0c605d3d73f79e8461b6c343d";
  //api를 통해서 영화 이미지를 조회해서와서 렌더링을 해볼겁니다.

  const dispatch = useDispatch();

  //인기영화 리스트를 조회해오는 함수
  const getPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular";

    //API 통신
    await axios
      .get(url, {
        params: {
          api_key: APIKEY,
        },
      })
      .then((res) => {
        console.log("API 통신이 성공하면 : ", res);
        //해당 부분에 상태값을 관리하고 저장하면되죠
        dispatch(popularMovieAction(res.data.results));
      })
      .catch((err) => {
        console.error("API 통신이 실패하면 : ", err);
      });
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <main id="main">
      <Header />
      <Search />
      <PopularMovie />
      <Footer />
    </main>
  );
};

export default Main;

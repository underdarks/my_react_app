import axios from "axios";
import { useSelector } from "react-redux";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w200/";

const PopularMovie = () => {
  console.log("Popular Movie 렌더링 ..");
  const { popularMovies } = useSelector((state) => ({
    popularMovies: state.movieReducer,
  }));

  console.log("popularMovies : ", popularMovies);

  return (
    <section className="popular_contents">
      <div>
        <h1 className="title">인기 콘텐츠</h1>
        <div>
          {popularMovies?.map((movie) => (
            <div>
              <img src={IMG_BASE_URL + movie.poster_path} alt="" />
              <h1>{movie.title}</h1>
              <h1>{movie.release_date}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMovie;

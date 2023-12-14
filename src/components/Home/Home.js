import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Api } from "../../utils/Api";
import TopBar from "../TopNav/TopBar";
import MovieCard from "../MovieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSerachValue] = useState();
  const [page_no, setPage_no] = useState(0);
  const fetchData = () => {
    Api.getMovieList(parseInt(page_no) + 1).then((res) => {
      setMovieList([...movieList, ...res.data.page["content-items"].content]);
      /*  setMovieList(res.data.page['content-items'].content) */
      setPage_no(res.data.page["page-num-requested"]);
    });
  };
  useEffect(() => {
    fetchData(page_no);
  }, []);
  const filteredMovieList = useMemo(() => {
    if (!searchValue) return movieList;

    return movieList?.filter((item) => {
      return (
        item?.name?.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    });
  }, [searchValue, movieList]);

  const searchContent = (searchValue) => {
    setSerachValue(searchValue);
  };
  return (
    <>
      <TopBar searchContent={searchContent} />

      <InfiniteScroll
        dataLength={movieList.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="movie-card-container">
          {movieList &&
            filteredMovieList?.map((value) => {
              return <MovieCard items={value} />;
            })}
        </div>
      </InfiniteScroll>
    </>
  );
};
export default Home;

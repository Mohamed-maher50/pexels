import "./App.css";

import useBookSearch from "./useBookSearch";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader/Loader";
import Navbar from "./layout/Navbar";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  const handleEnd = () => {
    setPageNumber(pageNumber + 1);
    setTimeout(() => {
      console.log("done");
    }, 1000);
  };
  // useEffect(() => {
  //   (async () => {
  //     const client = createClient(
  //       "kXddKp9E4F7mn9CxZ7pArNziFwOOCTd02cN1lXr9dYMzMhgFdEHAglj2"
  //     );
  //     const query = "natural";
  //     const result = await client.photos.search({ query, per_page: 1 });
  //     console.log(result);
  //   })();
  // }, []);
  return (
    <div className=" flex min-h-[300vh] flex-col ">
      <Navbar />
      <div className="container mx-auto">
        {/* <TextInput onChange={handleSearch} /> */}
        <InfiniteScroll
          next={handleEnd}
          dataLength={books.length}
          hasMore={hasMore}
          loader={<Loader />}
        >
          {books.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </InfiniteScroll>
      </div>
      <footer className="text-white mt-auto">this footer</footer>
    </div>
  );
}

export default App;

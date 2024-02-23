import "./App.css";
import { TextInput } from "flowbite-react";
import useBookSearch from "./useBookSearch";
import { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader/Loader";

function App() {
  const observer = useRef();
  console.log(observer);
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
    <>
      <div className="container mx-auto flex flex-col min-h-screen bg-primary">
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
        <footer className="text-white mt-auto">this footer</footer>
      </div>
    </>
  );
}

export default App;

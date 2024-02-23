import axios from "axios";
import { useEffect, useRef, useState } from "react";

const useBookSearch = (query = "", currentPage) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (books.length) setBooks([]);
  }, [query]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url: "https://openlibrary.org/search.json",
      params: {
        q: query,
        page: currentPage,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(({ data }) => {
        setBooks((prev) => [...prev, ...data.docs.map((b) => b.title)]);
        setHasMore(data.docs.length > 0);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    return () => {
      cancel && cancel();
    };
  }, [query, currentPage]);
  return {
    books,
    hasMore,
    loading,
    error,
  };
};

export default useBookSearch;

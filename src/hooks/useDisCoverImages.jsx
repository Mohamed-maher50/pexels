import { createClient } from "pexels";
import { useEffect, useState } from "react";

const useDisCoverImages = ({ query, currentPage = 1 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  console.log(currentPage);
  useEffect(() => {
    if (images.length) setImages([]);
  }, [query]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    const query = "Nature ";
    client.photos
      .search({ query, per_page: 10, page: currentPage })
      .then((res) => {
        setImages([...images, ...res.photos]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, currentPage]);
  return {
    images,
    hasMore,
    loading,
    error,
  };
};

export default useDisCoverImages;

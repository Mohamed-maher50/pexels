/* eslint-disable react-hooks/exhaustive-deps */

import { createClient } from "pexels";
import { useEffect, useState } from "react";

const useSearchImages = ({
  query = "nature",
  currentPage = 1,
  filtrationValues,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  console.log("loop");
  useEffect(() => {
    setImages((prev) => []);
    setHasMore(true);
  }, [query, filtrationValues]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

    new client.photos.search({
      query,
      per_page: 5,
      page: currentPage,
      ...filtrationValues,
    }).then((res) => {
      setImages((prev) => [...prev, ...res.photos]);
      if (res.photos.length === 0) return setHasMore(false);
    });
    setLoading(false);
  }, [query, currentPage, filtrationValues]);
  return {
    images,
    hasMore,
    loading,
    error,
    setImages,
  };
};

export default useSearchImages;

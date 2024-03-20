import { createClient } from "pexels";
import { useEffect, useMemo, useState } from "react";

const useSearchVideos = ({ currentPage = 1, query, filtrationValues }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useMemo(() => {
    setHasMore(true);
    setVideos([]);
  }, [query, filtrationValues]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
    client.videos
      .search({ per_page: 15, page: currentPage, query, ...filtrationValues })
      .then((res) => {
        if (res.videos.length <= 0) setHasMore(false);
        setVideos([...videos, ...res.videos]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filtrationValues, currentPage, query]);
  return {
    videos,
    hasMore,
    loading,
    error,
  };
};

export default useSearchVideos;

/* eslint-disable react-hooks/exhaustive-deps */

import { createClient } from "pexels";
import { useEffect, useState } from "react";

const usePopularVideos = ({ currentPage = 1 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setVideos([]);
    setHasMore(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

    new client.videos.popular({
      per_page: 5,
      page: currentPage,
    }).then((res) => {
      if (res.videos.length <= 0) setHasMore(false);
      setVideos([...videos, ...res.videos]);
    });
    setLoading(false);
  }, [currentPage]);
  return {
    videos,
    hasMore,
    loading,
    error,
    setVideos,
  };
};

export default usePopularVideos;

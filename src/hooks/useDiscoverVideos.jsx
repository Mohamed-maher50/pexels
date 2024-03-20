import { useEffect, useState } from "react";
import { createClient } from "pexels";

const useDiscoverVideos = ({ pageNumber = 1, query }) => {
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
      const queryString = query || "Nature";
      try {
        const response = await client.videos.search({
          page: pageNumber,
          query: queryString,
          per_page: 25,
        });
        setLoading(false);
        setVideos([...response.videos, ...videos]);
        if (response.videos.length === 0) setHasMore(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    })();
  }, [query, pageNumber]);
  return {
    loading,
    hasMore,
    videos,
    hasError,
  };
};

export default useDiscoverVideos;

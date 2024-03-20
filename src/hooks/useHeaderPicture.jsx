import { useEffect, useState } from "react";
import { createClient } from "pexels";
const useHeaderPicture = () => {
  const [headerPicture, setHeaderPicture] = useState(null);
  useEffect(() => {
    (async () => {
      const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
      const response = await client.photos.curated({ per_page: 1 });

      if (response.photos[0]) setHeaderPicture(response.photos[0]);
    })();
  }, []);
  return { headerPicture };
};

export default useHeaderPicture;

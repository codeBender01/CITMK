import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `http://192.168.1.20:5005/api/${endpoint}`,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);

      setData(res.data.services);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      if (!error.response) {
        // network error
        console.log("Error: Network Error");
      } else {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

import { useState, useEffect } from "react";
import { Platform } from "react-native";
import axios from "axios";
import server from "../constants/server";

const useFetch = (endpoint, dataNeeded) => {
  const [data, setData] = useState([]);
  const [isThereData, setIsThereData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = Platform.OS === "android" ? server : "localhost";

  const options = {
    method: "GET",
    url: `http://${baseUrl}:5005/api/${endpoint}`,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);

      setData(res.data);
      if (data.length === 0) {
        setIsThereData(false);
      }
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
  }, [setData]);

  const refetch = () => {
    setIsLoading(true);

    fetchData();
  };

  return { data, isLoading, error, refetch, isThereData };
};

export default useFetch;

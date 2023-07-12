import { useState } from "react";
import useFetch from "./useFetch";
import server from "../constants/server";

const useSignup = () => {
  const [errorSignup, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { refetch, data } = useFetch("user");

  const signup = async (name, organization, email, role, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://${server}:5005/api/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, organization, email, role, password }),
    });
    const json = await response.json();
    refetch();
    console.log(data);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      console.log("Success");
      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, isLoading, errorSignup };
};

export default useSignup;

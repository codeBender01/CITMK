import { useState } from "react";
import { Platform } from "react-native";
import useFetch from "./useFetch";

const useSignup = () => {
  const [errorSignup, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const baseUrl = Platform.OS === "android" ? "192.168.1.14" : "localhost";
  const { refetch, data } = useFetch("user");

  const signup = async (name, organization, email, role, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://${baseUrl}:5005/api/user/register`, {
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

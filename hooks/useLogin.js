// import { useState } from "react";

// const cookies = new Cookies();
// const role = cookies.get("role");

// export const useLogin = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const navigate = useNavigate();

//   const login = async (name, password) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/api/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, password }),
//       });

//       if (!response.ok) {
//         const json = await response.json();
//         throw new Error(json.error);
//       }

//       const json = await response.json();

//       // save the user to local storage
//       localStorage.setItem("user", JSON.stringify(json));
//       message.success("Вход выполнен успешно"); // Отображение сообщения об успешном входе с помощью message.success()
//       if (role === "admin") {
//         navigate("/admin/applications");

//       } else if (role === "user") {
//         navigate("/user/services");
//       }

//       // update the auth context
//       dispatch({ type: "LOGIN", payload: json });

//       // update loading state
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       setError(error.message);
//       message.error("Неправильный логин или пароль");
//     }
//   };

//   return { login, isLoading, error };
// };

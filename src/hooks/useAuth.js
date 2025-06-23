import { useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login: setToken } = useAuthContext();

  const login = async (email, password) => {
    try {
      setLoading(true);
      const data = await loginUser(email, password);
      setToken(data.jwtToken);
      return data;
    } catch (err) {
      console.log({ err });
      setError(err?.response?.data?.msg || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await registerUser(email, password);
      setToken(data.jwtToken);
      return data;
    } catch (err) {
      setError(err?.response?.data?.msg || "Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, register };
};

import { useState, useEffect } from "react";

const useGetAllToDo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchToDos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const todos = await response.json();
        setData(todos);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchToDos();
  }, []);

  return { isLoading, data, error };
};

export default useGetAllToDo;

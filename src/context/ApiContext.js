import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchValue) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/starships/?search=${searchValue}`
      );
      console.log(response);
      const jsonData = response.data.results.map((data) => {
        const slug = slugify(data.name);
        return { ...data, slug };
      });
      console.log(jsonData);
      setJsonData(jsonData);
      setNextPage(response.data.next);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const loadMoreJsonData = () => {
    axios
      .get(nextPage)
      .then((response) => {
        const newJsonData = response.data.results.map((data) => {
          const slug = slugify(data.name);
          return { ...data, slug };
        });
        setJsonData((prevjsonData) => [...prevjsonData, ...newJsonData]);
        setNextPage(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(jsonData);
  };

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  return (
    <ApiContext.Provider
      value={{
        jsonData,
        loadMoreJsonData,
        fetchData,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

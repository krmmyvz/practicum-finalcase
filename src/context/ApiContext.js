// Import necessary modules
import axios from "axios";
import { createContext, useState } from "react";

// Create a new context
export const ApiContext = createContext();

// Define a new provider component to provide data to the components
export const ApiProvider = ({ children }) => {
  // Define state variables to store the data
  const [jsonData, setJsonData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  // Define a function to fetch data from the SWAPI
  const fetchData = async (searchValue) => {
    // Set loading to true to indicate that data is being fetched
    setLoading(true);
    try {
      // Send GET request to the SWAPI to retrieve data
      const response = await axios.get(
        `https://swapi.dev/api/starships/?search=${searchValue}`
      );

      // Log the response to the console for debugging purposes
      console.log(response);

      // Map over the results to add a slug property to each object
      const jsonData = response.data.results.map((data) => {
        // Create slug variable from name key and include it to results.
        // It helps handle routing directly to specific starship element
        const slug = slugify(data.name);
        return { ...data, slug };
      });

      // Set the state variables to the fetched data
      setJsonData(jsonData);

      setNextPage(response.data.next);
    } catch (error) {
      console.log(error);
    }

    // Set loading to false to indicate that data has been fetched
    setLoading(false);
  };

  // Define a function to load more data from API
  const loadMoreJsonData = () => {
    axios

      // Send a GET request to the next page of results
      .get(nextPage)
      .then((response) => {
        // Map over the results to add a slug property to each object
        const newJsonData = response.data.results.map((data) => {
          const slug = slugify(data.name);
          return { ...data, slug };
        });

        // Update the state variables with the new data
        setJsonData((prevjsonData) => [...prevjsonData, ...newJsonData]);
        setNextPage(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  // Define a function to slugify text
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

  // Return the context provider with the data and functions
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

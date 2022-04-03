import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import axios from "axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [Meal, setMeal] = useState([]);
  const [gridInfo, setGridinfo] = useState([]);

  const defaultvalue = {
    state: [],
  };
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, defaultvalue);

  const categoryFilter = (category) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        setMeal(response.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(Meal);

  return (
    <AppContext.Provider
      value={{
        categoryFilter,
        Meal,
        gridInfo,
        setGridinfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;

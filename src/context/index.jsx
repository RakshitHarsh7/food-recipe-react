import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipeList, setReceipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`;

      const res = await fetch(url);

      const data = await res.json();

      if (data?.data?.recipes) {
        setReceipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/')
      }

      console.log(data);
    } catch (error) {
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem){

        console.log(getCurrentItem)

        let copyFavoriteList = [...favoriteList]
        const index = copyFavoriteList.findIndex(item => item.id === getCurrentItem.id)


        if(index === -1){

            copyFavoriteList.push(getCurrentItem)
        }
        else{

            copyFavoriteList.splice(copyFavoriteList);
        }
        setFavoriteList(copyFavoriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        receipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

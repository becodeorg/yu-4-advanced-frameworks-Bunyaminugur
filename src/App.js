import { createContext, useState } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";


export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchField />
      </Header>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;

import useLocalStorage from "./useLocalStorage.js";

const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  return [darkMode, setDarkMode]
};

export default useDarkMode
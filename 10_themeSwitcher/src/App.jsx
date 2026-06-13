import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider, ThemeContext } from "./context/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light")


  const lightTheme = () => {
    setThemeMode("light")
  }
  
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //works in every re-rendering
  useEffect( () => {
    document.querySelector("html").classList.remove("light","dark") //remove default light or dark in themeMode
    document.querySelector("html").classList.add(themeMode) //add light or dark in themeMode

  }, [themeMode])
  //as soon as the user changes the themeMode value, this function will run and remove the default themeMode value and add a new themeMode value to it
  
  //3 variables with a provider is passed onto components, where they can access these values
  return (
  <ThemeProvider value = {{themeMode, darkTheme, lightTheme}}>
  
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  
  </ThemeProvider>
  );
}

export default App;

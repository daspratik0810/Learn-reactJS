import { createContext, useContext } from "react";

// we are creating a context and passing it to ThemeContext varable and exporting it. This time by default we are not creating an empty context, rather we are passing few variables and methods to it 
//we can also pass a default value for createContext, that is a default context. Here we are passing a default obj, which is received when we call context 
  export const ThemeContext = createContext({
  themeMode: "light", //it is a variable
  darkTheme: () => {}, //it is a method
  lightTheme: () => {} //it is a method
})

export const ThemeProvider = ThemeContext.Provider  //we are directly exporting the ThemeContext.Provider 

// here the useContext is exported directly, and later on when needed we can access/use useTheme() function/custom hooks
export default function useTheme(){
  return useContext(ThemeContext)
}
// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//     const [theme, setTheme] = useState(
//         localStorage.getItem("theme") || "light"
//     );

//     useEffect(() => {
//         // This adds 'light' or 'dark' as a class to the <html> tag
//         document.documentElement.classList.remove("light", "dark");
//         document.documentElement.classList.add(theme);
//         localStorage.setItem("theme", theme);
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme((prev) => (prev === "light" ? "dark" : "light"));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }

// export const useTheme = () => useContext(ThemeContext);
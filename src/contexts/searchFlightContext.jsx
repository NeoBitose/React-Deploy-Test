import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchParams, setSearchParams] = useState({});
    return (
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
            {children}
        </SearchContext.Provider>
    );
};
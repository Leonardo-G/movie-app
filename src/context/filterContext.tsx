import { createContext } from "react";

export interface FilterContextProps {
    starValue: number,
    handleChangeValue: ( value: number ) => void;
    searchValue: string;
    handleSearch: (value: string) => void;
}

export const FilterContext = createContext<FilterContextProps>({} as FilterContextProps)
import { createContext, Dispatch, SetStateAction } from "react";

export interface FilterContextProps {
    starValue: number,
    handleChangeValue: ( value: number ) => void;
    searchValue: string;
    handleSearch: (value: string) => void;
    setSearchValue: Dispatch<SetStateAction<string>>
}

export const FilterContext = createContext<FilterContextProps>({} as FilterContextProps)
import { createContext } from "react";

export interface StarContextProps {
    starValue: number,
    handleChangeValue: ( value: number ) => void;
}

export const StarContext = createContext<StarContextProps>({} as StarContextProps)
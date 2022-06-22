import { ChangeEvent, useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from 'react-router-dom';

import { FilterContext } from '../../context/filterContext';

import "../../styles/components/filters/Search.css";

export const Search = () => {

    const { handleSearch, searchValue } = useContext( FilterContext );
    const [inputValue, setInputValue] = useState<string>("");
    const [ params ] = useSearchParams();

    const handleChangeInput = ( e: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(e.target.value)
    }

    const handlePressEnter = ( e: any ) => {
        if( e.key === "Enter"){
            handleSearch(inputValue)
        }
    }

    useEffect(() => {
        if( inputValue === "" && params.has("search")){
            handleSearch(params.get("search") as string);
        }
    // eslint-disable-next-line
    }, [])

    return (
        <div className='input--search'>
            <FontAwesomeIcon 
                icon={ faMagnifyingGlass} 
                className="icon--search"
                onClick={ () => handleSearch(inputValue) }
            />
            <input 
                type="text" 
                name="movies" 
                placeholder="Search for a movie..."  
                onChange={ handleChangeInput }  
                onKeyDown={ handlePressEnter }
                defaultValue={ searchValue }
            />
        </div>
    )
}

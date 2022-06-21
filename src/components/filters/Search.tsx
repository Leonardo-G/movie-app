import "../../styles/components/filters/Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, ChangeEventHandler, useContext, useState } from 'react';
import { FilterContext } from '../../context/filterContext';

export const Search = () => {

    const { handleSearch } = useContext( FilterContext );
    const [inputValue, setInputValue] = useState<string>("");

    const handleChangeInput = ( e: ChangeEvent<HTMLInputElement> ) => {
        setInputValue(e.target.value)
    }

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
            />
        </div>
    )
}

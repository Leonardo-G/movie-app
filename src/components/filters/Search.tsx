import "../../styles/components/filters/Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Search = () => {
    return (
        <div className='input--search'>
            <FontAwesomeIcon icon={ faMagnifyingGlass} className="icon--search"/>
            <input 
                type="text" 
                name="movies" 
                placeholder="Search for a movie..."    
            />
        </div>
    )
}

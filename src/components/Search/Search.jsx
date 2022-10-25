import styles from "./Search.module.css"
import {FaSearch} from "react-icons/fa"

import { useSearchParams } from "react-router-dom";


export function Search() {
    const [query, setQuery] = useSearchParams()
    const search = query.get("search")


    
    const handleSubmit = (e) => {
        e.preventDefault();
        

    }

    return (
        <div className={styles.searchContainer}>
            <form className={styles.searchBox} onSubmit={handleSubmit}>
                <input className={styles.searchInput} 
                       type="text" 
                       value={search ?? ""}
                       placeholder="Title"
                       aria-label="Search Movies" 
                       onChange={(e)=>{
                        const value = e.target.value
                        setQuery({search: value})
                        //navigate("/?search=" + value)
                    }
                        
                        }
                />
                
                <FaSearch size={20} color="black" className={styles.searchButton}/>
                
            </form>
        </div>
    )
}

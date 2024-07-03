import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fakeAuthors } from "../fakeData";
import AuthorCard from './AuthorCard';

export default function Authors() {
    const authors = fakeAuthors; 
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.3}}
        className="authors-page"
        >
            <h1>Authors</h1>
            <ul className="authors-container">
                {authors.map(author => {
                        return(
                            <li key={author.authorId}>
                                <Link to={`../?author=${author.name}`} >
                                    <AuthorCard author = {author}/>
                                </Link>
                            </li>
                        );                    
                    })
                }
            </ul>
        </motion.div>
    );
}
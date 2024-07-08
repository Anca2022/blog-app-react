import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar(props) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="sidebar"
        >
            <h3>Authors</h3>
            <ul>
                {
                    props.authors.map(author=> {
                        return(
                            <Link 
                            to={`?author=${author.name}`} 
                            key={author.authorId}
                            >
                                <li>
                                    <img src={author.image} alt={author.name} width='80px' height='80px'></img>
                                    <span>{author.name}</span>
                                </li>
                            </Link>
                        );                    
                    })
                }
            </ul>
        </motion.div>
    );
}
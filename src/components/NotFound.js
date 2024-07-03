import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.4}}
        className="not-found container"
        >
            <h2>Not Found</h2>
            <p>The page you are looking for does not exist</p>
            <Link to='/'>
                <button>Go back Home</button>
            </Link>
        </motion.div>
    );
}
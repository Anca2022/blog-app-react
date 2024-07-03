import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Button from './Button';
import AuthorCard from './AuthorCard';

export default function ArticleDetails() {
    const {state} = useLocation();
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="article-page"
        >
            <div className="article-content">
                <div className="article-title-block">
                    <h1>{state[0].title}</h1>
                    <p>By {state[1].name} </p>
                    <p className="date">{state[0].date}</p>
                </div>
                <motion.img
                src={state[0].mediumImage}
                alt={state[0].title}
                layoutId={`blog-image-${state[0].id}`}
                transition={{ duration: 0.5 }}
                />
                <section dangerouslySetInnerHTML={{__html: state[0].content}}></section>
            </div>
            <div className="author-info">
                <div className="author-info-top">
                    <span className="written-by">written by</span>
                    <Link to='/authors'><Button message={'all authors'}/></Link>
                </div>
                <Link to={`../?author=${state[1].name}`}><AuthorCard author={state[1]}/></Link>
            </div>
        </motion.div>
    );
}
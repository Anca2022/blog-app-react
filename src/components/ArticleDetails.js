import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Button from './Button';
import AuthorCard from './AuthorCard';
import {ReactComponent as Close} from '../assets/close.svg';

export default function ArticleDetails({article, author, onClose}) {
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut'}}
    };

    return (
        <motion.div
        layer
        className="backdrop"
        >
            <motion.div
            className="overlay"
            variants={overlayVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            onClick={onClose}
            >
            </motion.div>

            <motion.div
            className="article-page"
            layoutId={`article-blog-${article.id}`}
            >
                <button 
                onClick={onClose} 
                className="close-modal">
                    <Close />
                </button>
                <div className="article-content">
                    <motion.div className='article-image'
                    layout
                    >
                        <motion.img
                            src={article.mediumImage}
                            alt={article.title}
                            layoutId={`blog-image-${article.id}`}
                            style={{width:'100%', borderRadius: '10px'}}
                        />
                    </motion.div>
                    <div className="article-title-block">
                        <motion.h2
                        layoutId={`title-${article.id}`}
                        style={{fontSize: '28px', marginBottom: '1rem'}}
                        >
                            {article.title}
                        </motion.h2>
                        <p>By {author.name} </p>
                        <p className="date">{article.date}</p>
                    </div>
                    <section dangerouslySetInnerHTML={{__html: article.content}}></section>
                </div>
                <div className="author-info">
                    <div className="author-info-top">
                        <span className="written-by">written by</span>
                        <Link to='/authors'><Button message={'all authors'}/></Link>
                    </div>
                    <Link to={`../?author=${author.name}`} 
                    onClick={onClose}
                    ><AuthorCard author={author}/></Link>
                </div>
            </motion.div>   
        </motion.div>
    );
}
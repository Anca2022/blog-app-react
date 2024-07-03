import { motion } from "framer-motion";
import Button from "./Button";

export default function ArticleCard(props) {
    return (
        <motion.div className='article-card'
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.3}}
        >
            <div className="article-card-image">
                <motion.img
                src={props.article.mediumImage}
                alt={props.article.title}
                layoutId={`blog-image-${props.article.id}`}
                />
            </div>
            <div className="article-card-infos">
                <h2>{props.article.title}</h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button message={'Read article'}/>
            </div>
        </motion.div>
    );
}
import { motion } from "framer-motion";
import Button from "./Button";

export default function Featured(props) {
    return (
        <motion.div 
        initial={{ height:'50%', opacity:0 }}
        animate={{ height:'100%', opacity:1 }}
        exit={{ height:0, opacity:0}}
        transition={{duration:0.4}}
        className='article-card featured-article'
        >
            <div className="article-card-image featured-image">
                <motion.img 
                src={props.article.mediumImage} 
                alt={props.article.name}
                layoutId={`blog-image-${props.article.id}`}
                transition={{ duration: 0.5 }}
                ></motion.img>
            </div>
            <div className="article-card-infos featured-article-infos">
                <h2>{props.article.title}</h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button message = {'Read article'}/>
            </div>
        </motion.div> 
    );
}
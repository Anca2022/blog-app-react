import { motion } from "framer-motion";
import Button from "./Button";

export default function Featured(props) {
    return (
        <motion.div 
        className='article-card featured-article'
        >
            <motion.div className="featured-image"
            layout
            >
                <motion.img 
                src={props.article.mediumImage} 
                alt={props.article.name}
                layoutId={`blog-image-${props.article.id}`}
                style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '10px'}}
                />
            </motion.div>
            <div className="article-card-infos featured-article-infos">
                <motion.h2 
                layoutId={`title-${props.article.id}`}
                >
                    {props.article.title}
                </motion.h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button message = {'Read article'}/>
            </div>
        </motion.div> 
    );
}
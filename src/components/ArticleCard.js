import { motion } from "framer-motion";
import Button from "./Button";

export default function ArticleCard(props) {
    return (
        <motion.div className='article-card'>
            <motion.div className="article-card-image"
            layout
            style={{aspectRatio: 350/250}}
            >
                <motion.img
                src={props.article.mediumImage}
                alt={props.article.title}
                layoutId={`blog-image-${props.article.id}`}
                style={{width:'100%', height:'100%', objectFit: 'cover', borderRadius: '10px 10px 0 0'}}
                />
            </motion.div>
            <div className="article-card-infos">
                <h2>{props.article.title}</h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button message={'Read article'}/>
            </div>
        </motion.div>
    );
}
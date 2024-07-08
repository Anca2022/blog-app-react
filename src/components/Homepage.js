import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fakeArticles, fakeAuthors } from "../fakeData";
import ArticleDetails from './ArticleDetails';
import Featured from './Featured';
import Sidebar from './Sidebar'; 
import ArticleCard from './ArticleCard';


export default function Homepage() { 
    const [searchParams] = useSearchParams(); 
    const [paramAuthor, setParamAuthor] = useState();
    const [dialogContent, setDialogContent] = useState(null);
    let paramAuthorName = searchParams.get('author');
    const articles = fakeArticles; 
    const authors = fakeAuthors; 

    let featuredArticle = articles.find(article => article.featured===true); 
    let featuredArticleAuthor = authors.find(author => author.authorId === featuredArticle.authorId);

    useEffect( () => {
        setParamAuthor(authors.find(author => author.name === paramAuthorName));
    }, [searchParams, authors, paramAuthorName])

    return (
        <div className='homepage container'>
            <AnimatePresence>
                {dialogContent && 
                    (
                        <ArticleDetails article={dialogContent[0]} author={dialogContent[1]} onClose={()=> setDialogContent(null)}/>
                    )
                }
            </AnimatePresence>
            {   
                paramAuthorName ? 
                null
                : 
                <motion.div
                className="open-modal"
                layoutId={`article-blog-${featuredArticle.id}`}
                onClick={()=> setDialogContent([featuredArticle,featuredArticleAuthor])}
                > 
                    <Featured article = {featuredArticle} author = {featuredArticleAuthor} />
                </motion.div>
            }
            <main>
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                className='article-cards-container'
                >
                    {
                        paramAuthorName && paramAuthor ? 
                        articles.filter( article => article.authorId === paramAuthor.authorId)
                        .map(article => (
                            <motion.div 
                            className="open-modal" 
                            key={article.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0 }}
                            layoutId={`article-blog-${article.id}`}
                            onClick={()=> setDialogContent([article, paramAuthor])}
                            >
                                <ArticleCard article = {article} author={paramAuthor} />
                            </motion.div>
                            )
                        )
                        :
                        articles.map(article => {
                            if(article.featured===false) {
                                let author = authors.find(author => author.authorId === article.authorId)
                                return (
                                    <motion.div className="open-modal"  
                                    key={article.id}
                                    layoutId={`article-blog-${article.id}`}
                                    onClick={()=> setDialogContent([article,author])}
                                    >
                                        <ArticleCard article = {article} author={author} />
                                    </motion.div>
                                )
                            } else return null; 
                        })
                    } 
                </motion.div>
                
                <Sidebar authors = {authors}/>
            </main>
        </div>
    );
}
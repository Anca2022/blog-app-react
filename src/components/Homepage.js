import { fakeArticles, fakeAuthors } from "../fakeData";
import Featured from './Featured';
import Sidebar from './Sidebar'; 
import ArticleCard from './ArticleCard';
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Homepage() {
    const [searchParams] = useSearchParams(); 
    const [paramAuthor, setParamAuthor] = useState();
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
            {   
                paramAuthorName ? 
                null
                : 
                <Link to={`/article-details/${featuredArticle.title}`} state={[featuredArticle, featuredArticleAuthor]}><Featured article = {featuredArticle} author = {featuredArticleAuthor}/></Link>
            }
            <main>
                <div className='article-cards-container'>
                    {
                        paramAuthorName && paramAuthor ? 
                        articles.filter( article => article.authorId === paramAuthor.authorId)
                        .map(article =>{
                            return (
                                <Link to={`/article-details/${article.title}`} state={[article,paramAuthor]} key = {article.id}>
                                    <ArticleCard article = {article} author={paramAuthor} />
                                </Link> 
                            )
                        })
                        :
                        articles.map(article => {
                            if(article.featured===false) {
                                let author = authors.find(author => author.authorId === article.authorId)
                                return (
                                <Link to={`/article-details/${article.title}`} state={[article,author]} key = {article.id}>
                                    <ArticleCard article = {article} author={author} />
                                </Link>
                                )
                            } else return null; 
                        })
                    } 

                </div>
                <Sidebar authors = {authors}/>
            </main>
        </div>
    );
}
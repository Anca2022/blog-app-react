import { fakeArticles, fakeAuthors } from "../fakeData";
import Featured from './Featured';
import Sidebar from './Sidebar'; 
import ArticleCard from './ArticleCard';
import { Link } from "react-router-dom";
export default function Homepage() {
    const articles = fakeArticles; 
    const authors = fakeAuthors; 
    let featuredArticle = articles.find(article => article.featured===true); 
    let featuredArticleAuthor = authors.find(author => author.authorId === featuredArticle.authorId);
    return (
        <div className='homepage container'>
            <Link to={`/article-details/${featuredArticle.title}`} state={[featuredArticle, featuredArticleAuthor]}><Featured article = {featuredArticle} author = {featuredArticleAuthor}/></Link>
            <main>
                <div className='article-cards-container'>
                    {
                        articles.map(article => {
                            if(article.featured===false) {
                                let author = authors.find(author => author.authorId === article.authorId)
                                return <ArticleCard key = {article.id} article = {article} author={author} />
                            } else return null; 
                        })
                    }
                </div>
                <Sidebar authors = {authors}/>
            </main>
        </div>
    );
}
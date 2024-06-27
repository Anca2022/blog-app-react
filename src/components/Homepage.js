import { fakeArticles, fakeAuthors } from "../fakeData";
import Featured from './Featured';
import Sidebar from './Sidebar'; 
import ArticleCard from './ArticleCard';
export default function Homepage() {
    const articles = fakeArticles; 
    const authors = fakeAuthors; 
    // let article = articles.filter(article => article.featured===true); 
    return (
        <div className='homepage container'>
            <Featured article = {articles.filter(article => article.featured===true)}/>
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
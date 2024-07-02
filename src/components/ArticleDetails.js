import { useLocation, Link } from "react-router-dom";
import Button from './Button';
import AuthorCard from './AuthorCard';
export default function ArticleDetails() {
    const {state} = useLocation();
    return (
        <div className="article-page">
            <div className="article-content">
                <div className="article-title-block">
                    <h1>{state[0].title}</h1>
                    <p>By {state[1].name} </p>
                    <p className="date">{state[0].date}</p>
                </div>
                <img src={state[0].largeImage} alt='most representative for the article'></img>
                <section dangerouslySetInnerHTML={{__html: state[0].content}}></section>
            </div>
            <div className="author-info">
                <div className="author-info-top">
                    <span className="written-by">written by</span>
                    <Link to='/authors'><Button message={'all authors'}/></Link>
                </div>
                <Link to={`../?author=${state[1].name}`}><AuthorCard author={state[1]}/></Link>
            </div>
            
        </div>
    );
}
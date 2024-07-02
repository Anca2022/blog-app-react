import { Link } from "react-router-dom";
import AuthorCard from './AuthorCard';
import { fakeAuthors } from "../fakeData";
export default function Authors() {
    const authors = fakeAuthors; 
    return (
        <div className="authors-page">
            <h1>Authors</h1>
            <ul className="authors-container">
                {authors.map(author => {
                        return(
                            <li key={author.authorId}>
                                <Link to={`../?author=${author.name}`} >
                                    <AuthorCard author = {author}/>
                                </Link>
                            </li>
                        );                    
                    })}
            </ul>
        </div>
    );
}
import Button from "./Button";
export default function Featured(props) {
    return (
        <div className='featured-article'>
            <div className="featured-image">
                <img src={props.article.image} alt='for featured article'></img>
            </div>
            <div className="featured-article-infos">
                <h2>{props.article.title}</h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button/>
            </div>
        </div>
    );
}
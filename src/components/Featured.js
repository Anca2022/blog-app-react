import Button from "./Button";
export default function Featured(props) {
    return (
        <div className='article-card featured-article'>
            <div className="article-card-image featured-image">
                <img src={props.article.image} alt='for featured article'></img>
            </div>
            <div className="article-card-infos featured-article-infos">
                <h2>{props.article.title}</h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button/>
            </div>
        </div> 
    );
}
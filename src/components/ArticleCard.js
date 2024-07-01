import Button from "./Button";
export default function ArticleCard(props) {
    // console.log(props);
    return (
        <div className='article-card'>
            <div className="article-card-image">
                <img src={props.article.mediumImage} alt='for article'></img>
            </div>
            <div className="article-card-infos">
                <h2>{props.article.title}</h2>
                <p>By {props.author.name} - {props.article.date}</p> 
                <Button/>
            </div>
        </div>
    );
}
export default function ArticleCard(props) {
    console.log(props);
    return (
        <div>
            <p>{props.article.title}</p>
            <p> by {props.author.name}</p>
        </div>
    );
}
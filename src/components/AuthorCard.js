export default function AuthorCard(props) {
    return (
        <div className="author-card">
            <img src={props.author.image} alt={`${props.author.name}, one of the authors of the BlogApp`} width='80px' height='80px'></img>
            <div>
                <h3>{props.author.name}</h3>
                <p>{props.author.bio}</p>
            </div>
        </div>
    );
}
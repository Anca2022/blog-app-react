import { Link } from "react-router-dom";
export default function Sidebar(props) {
    return (
        <div className="sidebar">
            <h3>Authors</h3>
            <ul>
                {
                    props.authors.map(author=> {
                        return(
                            <Link to={`?author=${author.name}`} key={author.authorId}>
                                <li>
                                    <img src={author.image} alt={author.name} width='80px' height='80px'></img>
                                    <span>{author.name}</span>
                                </li>
                            </Link>
                        );                    
                    })
                }
            </ul>

        </div>


        //             <Link to = ‘?type=simple’ > Simple </Link>
    );
}
import { useLocation } from "react-router-dom";
export default function ArticleDetails() {
    const {state} = useLocation();
    // console.log(state);
    return (
        // <>Article Details</>
        <>
        <h1>{state[0].title}</h1>
        <p>by {state[1].name}</p>
        </>
    );
}
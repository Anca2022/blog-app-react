import { ReactComponent as Arrow} from '../assets/arrow_right_alt.svg';
export default function Button(){
    return(
        <div className="button">
            <span>Read article </span> 
            <Arrow/> 
        </div>
    );
}
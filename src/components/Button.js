import { ReactComponent as Arrow} from '../assets/arrow_right_alt.svg';
export default function Button(props){
    return(
        <div className="button">
            <span>{props.message}</span> 
            <Arrow/> 
        </div>
    );
}
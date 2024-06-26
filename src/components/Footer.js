import { Link } from "react-router-dom";
import { ReactComponent as Instagram} from '../assets/instagram.svg';
import { ReactComponent as Facebook} from '../assets/facebook.svg';
import { ReactComponent as Linkedin} from '../assets/linkedin.svg';
import { ReactComponent as Twitter} from '../assets/twitter.svg';

export default function Footer() {
    return (
        <div className="footer">
            <div className='media'>
                <Link to='https://www.instagram.com/'>
                    <Instagram />  
                </Link>
                <Link to='https://www.facebook.com/'>
                    <Facebook/>
                </Link>
                <Link to='https://www.linkedin.com/'>
                    <Linkedin />
                </Link>
                <Link to='https://x.com/'>
                    <Twitter />
                </Link>
            </div>
            
            <small>©2024 Blog. All rights reserved.</small>
        </div>
    );
}
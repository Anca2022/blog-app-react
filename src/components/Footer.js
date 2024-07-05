import { Link } from "react-router-dom";

import { ReactComponent as Instagram} from '../assets/instagram.svg';
import { ReactComponent as Facebook} from '../assets/facebook.svg';
import { ReactComponent as Linkedin} from '../assets/linkedin.svg';
import { ReactComponent as Twitter} from '../assets/twitter.svg';

export default function Footer() {

    return (
        <footer 
        
        className="footer"
        >
            <div className='media'>
                <Link to='https://www.instagram.com/' target="_black">
                    <Instagram />  
                </Link>
                <Link to='https://www.facebook.com/' target="_black">
                    <Facebook/>
                </Link>
                <Link to='https://www.linkedin.com/' target="_black">
                    <Linkedin />
                </Link>
                <Link to='https://x.com/' target="_black">
                    <Twitter />
                </Link>
            </div>
            
            <small>©2024 Blog. All rights reserved.</small>
        </footer>
    );
}
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Instagram} from '../assets/instagram.svg';
import { ReactComponent as Facebook} from '../assets/facebook.svg';
import { ReactComponent as Linkedin} from '../assets/linkedin.svg';
import { ReactComponent as Twitter} from '../assets/twitter.svg';

export default function Footer() {
    const location = useLocation();
    const [animateFooter, setAnimateFooter] = useState(false);

    useEffect(() => {
        if(location.pathname !== '/admin') {
            setAnimateFooter(false);
            const timer = setTimeout(() => setAnimateFooter(true), 500);
            return () => clearTimeout(timer);
        } else setAnimateFooter(true);
    }, [location]);

    return (
        <motion.footer 
        initial={{ height:0, opacity:0 }}
        animate={animateFooter ? { height:'100%', opacity:1 } : { height:0, opacity:0}}
        transition={{  duration: 0.2 }}
        className="footer"
        >
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
        </motion.footer>
    );
}
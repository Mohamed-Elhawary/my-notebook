import { 
    AiFillLinkedin, 
    AiFillGithub, 
    AiFillCodepenCircle, 
    AiFillBehanceCircle 
} from "react-icons/ai";
import signature from "../../signature.png";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div>
                All Rights reserved &copy; {new Date().getFullYear()}, <a href="https://github.com/Mohamed-Elhawary/my-notebook" target="_blank">MY Notebook</a> {/* eslint-disable-line */}
                <p className="author">
                    <div>
                        Made by: 
                        <a href="https://www.linkedin.com/in/mohamed-elhawary14/" target="_blank"> {/* eslint-disable-line */} 
                            <img src={signature} alt="signature" width="100" height="40" />
                        </a>
                    </div>
                </p> 
                <ul className="social">
                    <li className="mr-3"><a href="https://www.linkedin.com/in/mohamed-elhawary14/" target="_blank"><AiFillLinkedin size={30} /></a></li> {/* eslint-disable-line */}
                    <li className="mr-3"><a href="https://github.com/Mohamed-Elhawary" target="_blank"><AiFillGithub size={30} /></a></li> {/* eslint-disable-line */}
                    <li className="mr-3"><a href="https://codepen.io/Mohamed-ElHawary" target="_blank"><AiFillCodepenCircle size={30} /></a></li> {/* eslint-disable-line */}
                    <li className="mr-3"><a href="https://www.behance.net/mohamed-elhawary14" target="_blank"><AiFillBehanceCircle size={30} /></a></li> {/* eslint-disable-line */}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
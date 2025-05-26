import { FaPhone } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";

import './footer.css'

export function Footer () {
    return (
        <footer>
            <div className='footerLinks'>
                <ul>
                    <li><a href="">Բոնուսային միավորներ</a></li>
                    <li><a href="">Մեր մասին</a></li>
                    <li><a href="">Ապառիկ</a></li>
                    <li><a href="">Խանութներ</a></li>
                    <li><a href="">Պայմաններ եւ դրույթներ</a></li>
                    <li><a href="">Կապ</a></li>
                    <li><a href="">Աշխատատեղեր</a></li>
                </ul>
            </div>

            <div className='footerBottom'>
                <div className="phone">
                    <FaPhone />
                    <p>+374 15 70 00 00, +374 11 54 00 00<br/>
                    Սպասարկման ծառայության<br/> աշխատանքային ժամերը՝ 10:00 - 21:00</p>
                </div>

                <div className="pay">
                    <FaCcMastercard />
                    <p>Ապառիկի պայմաններ<br/>
                    <a className='payInfo'>Ծանոթացեք ապառիկի պայմաններին այստեղ</a></p>
                </div>
            </div>
        </footer>
    )
}
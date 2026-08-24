import Logo from "../../ui/logo/Logo";
import MailIcon from "../../ui/mail-icon/MailIcon";
import PhoneIcon from "../../ui/phone-icon/PhoneIcon";
import "./footer.scss"

export default  function Footer () {

    return (

        <div className="footer grid">

            <div className="footer__line"></div>
            
            <div className="footer__container">

                <Logo />

                <div className="footer__info">
                    <p>@ 2024 ARCAD All rights reserved</p>
                    <p>Privacy policy</p>
                    <p>Terms of service</p>
                </div>

                <div className="footer__contact">
                    <div className="footer__container-text-contact">
                        <PhoneIcon />
                        <p className="footer__text">+57 300 100 00 00</p>
                    </div>
                    <div className="footer__container-text-contact">
                        <MailIcon />
                        <p className="footer__text">arcad@arcad.com</p>
                    </div>
                </div>

            </div>

        </div>

    )
}
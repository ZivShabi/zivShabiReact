import Logo from "./Logo";

import '../../styles/footer.css';
function Footer() {
    return (
        <footer className="border-top my-2 text-center container-Footer ">
            <div className="footer-links social-media">
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="container">


                <div className="contact-info" >
                    <p><i className="fa-solid fa-envelope"></i>  zivshabi11@walla.com</p>
                    <p><i className="fa-brands fa-whatsapp"></i>  052412****</p>
                    <p><i className="fa-solid fa-location-dot"></i> Hod Hasharon, Israel</p>
                </div>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />

                <Logo />
                <span className="mx-2">&copy;</span>
                <span>{new Date().getUTCFullYear()}</span>
            </div>
        </footer>
    );
}

export default Footer;


import "./side-bar.scss"
import amountScrolled from "./amount-scrolled"

const SideBar = () => {

    let myPicture = require("../assets/images/MugShot.jpg")

    const setLinkColors=(link: string)=> {

        const navLinks = document.getElementsByClassName('nav-link');

        for (let i = 0; i < navLinks.length; i++) {
            const slide = navLinks[i] as HTMLElement;
            slide.style.color = "rgba(232, 232, 232, 0.95)";
        }

        let element = document.getElementById(link);
        if (element) (element as HTMLParagraphElement).style.color = "#007bff"

    }

    //Sets the correct highlight on the side-bar
    window.addEventListener("scroll", function () {
        amountScrolled()
    }, false)


    return (
        <div className="moveME">

            <div className="sidebar" >

                <div className="photo-container">
                    <img className="image center" src={myPicture} width="120" height="140" />
                    <h1 className="name">Milan Krunic</h1>
                </div>
                <div className="link-container">
                    <a id="home" href="#" className="nav-link" onClick={() => setLinkColors("home")}>Home</a>
                    <a id="about" href="#About" className="nav-link" onClick={() => setLinkColors("about")}>About</a>
                    <a id="skills" href="#Skills" className="nav-link" onClick={() => setLinkColors("skills")}>Skills</a>
                    <a id="portfolio" href="#Portfolio" className="nav-link" onClick={() => setLinkColors("portfolio")}>Portfolio</a>
                    <a id="contact" href="#Contact" className="nav-link" onClick={() => setLinkColors("contact")}>Contact</a>
                </div>

            </div>
        </div>
    )
}
export default SideBar



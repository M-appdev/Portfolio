
import "./side-bar.scss"
const SideBar = () => {

    let myPicture = require("../assets/images/MugShot.jpg")

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }

    function amountscrolled() {
        var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
        var docheight = getDocHeight()
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        console.log(pctScrolled)
        if (pctScrolled < 17) { //home
            let nextElement = document.getElementById('about');
            if (nextElement) (nextElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"

            let element = document.getElementById('home');
            if (element) (element as HTMLParagraphElement).style.color = "#007bff"

            let lastElement = document.getElementById('about');
            if (lastElement) (lastElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"
        } else if (pctScrolled > 17 && pctScrolled <38) { //about
            let nextElement = document.getElementById('home');
            if (nextElement) (nextElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"

            let element = document.getElementById('about');
            if (element) (element as HTMLParagraphElement).style.color = "#007bff"

            let lastElement = document.getElementById('skills');
            if (lastElement) (lastElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"
        }
        else if (pctScrolled > 38 && pctScrolled < 61) { //skills
            let nextElement = document.getElementById('about');
            if (nextElement) (nextElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"

            let element = document.getElementById('skills');
            if (element) (element as HTMLParagraphElement).style.color = "#007bff"

            let lastElement = document.getElementById('portfolio');
            if (lastElement) (lastElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"
        }
        else if (pctScrolled > 61 && pctScrolled < 92) { //portfolio
            let nextElement = document.getElementById('skills');
            if (nextElement) (nextElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"

            let element = document.getElementById('portfolio');
            if (element) (element as HTMLParagraphElement).style.color = "#007bff"

            let lastElement = document.getElementById('contact');
            if (lastElement) (lastElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"
        }
        else if (pctScrolled > 92 && pctScrolled <= 100) {//contact
            let nextElement = document.getElementById('portfolio');
            if (nextElement) (nextElement as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"

            let element = document.getElementById('contact');
            if (element) (element as HTMLParagraphElement).style.color = "#007bff"


        }
    }

    window.addEventListener("scroll", function () {
        amountscrolled()
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



function setLinkColors(link: string) {

    const navLinks = document.getElementsByClassName('nav-link');

    for (let i = 0; i < navLinks.length; i++) {
        const slide = navLinks[i] as HTMLElement;
        slide.style.color = "rgba(232, 232, 232, 0.95)";
    }

    let element = document.getElementById(link);
    if (element) (element as HTMLParagraphElement).style.color = "#007bff"

}
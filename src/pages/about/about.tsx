import { getJSDocAugmentsTag } from "typescript"
import "./about.scss"

const About = () => {
    let myPicture = require("../../assets/images/MugShot.jpg")

    const getAge = () => {
        var dob = new Date(1998, 4, 21)
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    return (
        <div id="About" className="about page page-centering ">
            
            <div className="picture">
                <div className="title">
                    <h1 className="page-title">About me</h1>
                    <p className="page-description">Some basic info about myself</p>
                </div>
                <img src={myPicture} className="profile-picture" />
            </div>

            <div className="about-content">
                <h2 className="question">Who am I?</h2>
                <h1>I'm Milan Krunic, Junior Develioper</h1>
                <p className="about-me">
                    Hello! I'm a web developer based in Bosnia And Herzegovina,
                    studying and finishing my bachelor's degree in computer science.
                    I have about a year of proffesional experience as a web developer, primarely front-end web development, though i love mobile development too!
                    I always strive to improve myself in all possible ways, which is convenient when you work as a developer.
                    Continuous learning and improvement makes me happy and I happily do it.
                    I'm always looking for new ways to grow, so if you're interested in working with me, don't hesitate to email me!

                </p>

                <table className="about-me-table">
                    <tr >
                        <td>Name: </td>  <span className="table-text">Milan Krunic</span>
                        <td>Email: </td> <a className="link" href="mailto:milankrunic12@gmail.com">milankrunic12@gmail.com</a>
                    </tr>
                    <tr >
                        <td>Age:  </td> <span className="table-text">{getAge()}</span>
                        <td>From: </td> <a className="link" href="https://www.google.com/maps/place/Bijeljina/" target="_blank">Bijeljina, Bosnia and Herzegovina</a>
                    </tr>
                </table>

                <div className="CV-container">
                    <p className="cv">Curriculum vitae</p>
                    <a className="myButton" href="./CV-Milan Krunic.pdf" download="CV-Milan-Krunic.pdf" >Download CV</a>
                </div>
            </div>




        </div>
    )
}
export default About
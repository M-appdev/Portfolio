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
        <div className="about page page-centering ">
            <div className="picture">
                <div className="title">
                    <h1 className="page-title">About me</h1>
                    <p className="page-description">Some basic info about myself</p>
                </div>
                <img src={myPicture} className="profile-picture" />

            </div>
            <div className="about-content">
                <h2 className="question">Who am I?</h2>
                <h1>I'm Milan Krunic, Junior Web Develioper</h1>
                <p className="about-me">
                    {/* I am a web developer based in the United States, and I build websites and commercial-grade applications,
                    which comply with the latest technological trends. I help convert a vision and an idea into meaningful and useful products.
                    Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>

                <table className="about-me-table">
                    <tr >
                        <td>Name: </td>  <span className="table-text">Milan Krunic</span>
                        <td>Email: </td> <a className="link"  href="#contact">milankrunic12@gmail.com</a>
                    </tr>
                    <tr >
                        <td>Age:  </td> <span className="table-text">{getAge()}</span>
                        <td>From: </td> <a className="link" href="https://www.google.com/maps/place/Bijeljina/" target="_blank">Bijeljina, Bosnia and Herzegovina</a>
                    </tr>
                </table>
            </div>




        </div>
    )
}
export default About
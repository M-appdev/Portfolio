import "./about.scss"

const About = () => {
    let myPicture = require("../../assets/images/MugShot.jpg")


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
                <h1 className="question">Who am I?</h1>
                <h1>I'm Milan Krunic, Junior Web Develioper</h1>
                <p>
                I am a web developer based in the United States, and I build websites and commercial-grade applications,
                 which comply with the latest technological trends. I help convert a vision and an idea into meaningful and useful products. 
                 Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                </p>
            </div>



        </div>
    )
}
export default About
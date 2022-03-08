import "./portfolio.scss"
// import Spirit from "../../assets/images/bussiness-management.jpg"
const Portfolio = () => {


    return (
        <div id="Portfolio" className="portfolio page page-centering ">

            <div className="title">
                <h1 className="page-title">Portfolio</h1>
                <span className="page-description">Welcome to a showcase of my best work!</span>
            </div>

            <div className="profesional-projects">
                <h1>Profesional Projects:</h1>
                <ProjectCard projectName="Daimler DARWIN Marathon" imgSrc={"https://www.allbusiness.com/asset/2019/07/Business-apps.jpg"} />

            </div>
            <div className="personal-projects">
            <h1>My Personal Projects:</h1>

                <ProjectCard projectName="Gym Buddy" imgSrc={"https://findhealthcoach.com/wp-content/uploads/2018/10/GymBuddy-300x300.jpg"}/>

            </div>



        </div>
    )
}
export default Portfolio

const ProjectCard = (props: any) => {
    const spirit = require("../../assets/images/bussiness-management.jpg")
    const gymBuddy = require("../../assets/images/gym-buddy.jpg")

    return (
        <div className="project-card">

            <img className="project-image" src={props.imgSrc} alt="" width={250} height={250} />
           
            <h1 className="project-name">{props.projectName}</h1>

        </div>
    )
}
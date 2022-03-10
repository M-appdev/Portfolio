import "./portfolio.scss"
import ProjectCard from "../../components/project-card/project-card"
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
                <ProjectCard projectName="Gym Buddy" openSite={"http://personalgymbuddy.milankrunic.com"} imgSrc={"https://findhealthcoach.com/wp-content/uploads/2018/10/GymBuddy-300x300.jpg"} />
            </div>



        </div>
    )
}
export default Portfolio


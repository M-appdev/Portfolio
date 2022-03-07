import "./portfolio.scss"
// import Spirit from "../../assets/images/bussiness-management.jpg"
const Portfolio = () => {


    return (
        <div id="Portfolio" className="portfolio page page-centering ">

            <div className="title">
                <h1 className="page-title">Portfolio</h1>
                <p className="page-description">Welcome to a showcase of my best work!</p>
            </div>



            <ProjectCard/>

        </div>
    )
}
export default Portfolio

const ProjectCard = () => {
    const spirit =require("../../assets/images/bussiness-management.jpg")
    const gymBuddy =require("../../assets/images/gym-buddy.jpg")

    return (
        <div className="project-card">

            <img src={spirit} alt="" width={350} />
            <img src={gymBuddy} alt="" width={350} />


        </div>
    )
}
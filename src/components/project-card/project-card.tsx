import "./project-card.scss"

const ProjectCard = (props: any) => {
    const spirit = require("../../assets/images/bussiness-management.jpg")
    const gymBuddy = require("../../assets/images/gym-buddy.jpg")

    return (
        <div className="project-card" onClick={()=>window.open("http://personalgymbuddy.milankrunic.com")}>

            <img className="project-image" src={props.imgSrc} alt="" width={300} height={300} />

            <h1 className="project-name">{props.projectName}</h1>

            <a className="open-project">Click for more</a>
        </div>
    )
}
export default ProjectCard
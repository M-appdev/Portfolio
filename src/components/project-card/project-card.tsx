import "./project-card.scss"

const ProjectCard = (props: any) => {
   
    const openSite=()=>{
        if(props.openSite){
            console.log("clicked")
            window.open(props.openSite)
        }
    }

    return (
        <div className="project-card" onClick={()=>openSite()}>

            <img className="project-image" src={props.imgSrc} alt="" width={300} height={300} />

            <h1 className="project-name">{props.projectName}</h1>

            <a className="open-project">Click for more</a>
        </div>
    )
}
export default ProjectCard
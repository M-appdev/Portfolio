import "./skill-card.scss"

const SkillCard = (props: any) => {

    return (
        <div className="skill-card">
            {props.src ? <div><img className="card-image" src={props.src} alt="react-logo" width={75}  height={75}/></div> : ""}
            <h1 className="card-title">{props.title}</h1>
            <p className="card-description">{props.description}</p>
        </div>
    )
}
export default SkillCard

import "./side-bar.scss"
// import image from "../../assets/images/MugShot.jpg"
const SideBar = () => {

let x=require("../../assets/images/MugShot.jpg")

    return (

        <div className="sidebar" >

            <div className="photo-container">
                <img className="image center" src={x} width="120" height="140"/>
                <h1 className="name">Milan Krunic</h1>
            </div>
            <div className="link-container">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Skills</a>
                <a href="#" className="nav-link">Portfolio</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
        </div>
    )
}
export default SideBar




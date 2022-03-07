
import "./side-bar.scss"
const SideBar = () => {

let myPicture=require("../assets/images/MugShot.jpg")

    return (

        <div className="sidebar" >

            <div className="photo-container">
                <img className="image center" src={myPicture} width="120" height="140"/>
                <h1 className="name">Milan Krunic</h1>
            </div>
            <div className="link-container">
                <a href="#" className="nav-link">Home</a>
                <a href="#About" className="nav-link">About</a>
                <a href="#Skills" className="nav-link">Skills</a>
                <a href="#Portfolio" className="nav-link">Portfolio</a>
                <a href="#Contact" className="nav-link">Contact</a>
            </div>
        </div>
    )
}
export default SideBar




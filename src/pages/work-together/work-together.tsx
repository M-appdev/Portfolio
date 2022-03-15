import "./work-together.scss"


const WorkTogether = () => {

    return (
        <div className="work-together page">

            <div className="container">
                <div className="work-together-text">
                    <h1 className="title ">Let's Work Together!</h1>
                    <p className="description">I am always up for a challange!</p>
                </div>
                <a href="#Contact" className="myButton" onClick={()=>{
                    let element = document.getElementById("skills");
                    if (element) (element as HTMLParagraphElement).style.color = "rgba(232, 232, 232, 0.95)"

                }}>Send me a Message</a>
            </div>

        </div>
    )
}
export default WorkTogether
import { useState } from "react"
import "./contact.scss"

const Contact = () => {
    const [showThankYou, setShowThankYou] = useState(false);


    return (
        <div id="Contact" className="contact page page-centering ">

            <div className="title">
                <h1 className="page-title">Contact me!</h1>
                <p className="page-description">Feel free to contact me, I usually respond within a couple of minutes.</p>
            </div>


            <form action="https://formsubmit.co/milankrunic12@gmail.com" method="POST" onSubmit={() => alert("Message sent! I will respond asap!")}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New email from website!" />
                <input type="hidden" name="_next" value="http://localhost:3000/#Home" />

                <input className="form name" type="text" name="name" required placeholder="Your name" />
                <input className="form email" type="email" name="email" required placeholder="Email" />
                <input className="form subject" type="subject" name="subject" placeholder="Subject" />

                <input className=" form message" type="message" name="message" required placeholder="Message " />

                <button className="myButton" type="submit" >Send</button>
            </form>



        </div>


    )
}
export default Contact
import { useState } from "react"
import "./contact.scss"

import PopUp from "../../components/pop-up/pop-up";

const Contact = () => {
    const [showThankYou, setShowThankYou] = useState(false);


    return (
        <div id="Contact" className="contact page page-centering ">

            <div className="title">
                <h1 className="page-title">Contact me!</h1>
                <p className="page-description">Don't hesitate to contact me, I usually reply in a matter of minutes.</p>
            </div>


            <form action="https://formsubmit.co/milankrunic12@gmail.com" method="POST" onSubmit={() => setShowThankYou(true)}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New email from website!" />
                <input type="hidden" name="_next" value="http://www.milankrunic.com/#Home" />

                <input className="form name" type="text" name="name" required placeholder="Your name" />
                <input className="form email" type="email" name="email" required placeholder="Your Email" />
                <input className="form subject" type="subject" name="subject" placeholder="Subject" />

                <textarea className=" form message"  name="message" required placeholder="Message " />

                <button className="myButton" type="submit" >Send</button>
            </form>

            {showThankYou ? <h1 className="thank-you">Message Sent!</h1> : ""}
        </div>


    )
}
export default Contact
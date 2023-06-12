import "./mailList.css";

const MailList = () => {
    return (
        <div className="mail">
            <h2 className="mailTitle">Save time, Save money!</h2>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <div className="mailInputContiner">
                <input type="text" placeholder="your email.." />
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default MailList

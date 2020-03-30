import React from "react"
import './Contact.css';


const Contact = props => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
            <div>
            <div className="name">{props.name}</div>

            <div className="status">
                <div className={`status-${props.online ? 'online' : 'offline'}`}></div>
                <div className="status-text">{props.online ? 'online' : 'offline'}</div>
            </div>
            </div>
        </div >
    )
}

export default Contact
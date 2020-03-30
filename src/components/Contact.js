import React from "react"
import './Contact.css';


const Contact = ({ name, avatar, online }) => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} />
            <div>
            <div className="name">{name}</div>

            <div className="status">
                <div className={`status-${online ? 'online' : 'offline'}`}></div>
                <div className="status-text">{online ? 'online' : 'offline'}</div>
            </div>
            </div>
        </div >
    )
}

export default Contact
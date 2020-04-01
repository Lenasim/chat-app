import React from "react";
import PropTypes from 'prop-types'
import "./Contact.css";

const Contact = props => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="" />
      <div>
        <div className="name">{props.name}</div>

        <div className="status">
          <div className={`status-${props.online ? "online" : "offline"}`} />
          <div className="status-text">
            {props.online ? "online" : "offline"}
          </div>
        </div>
      </div>
    </div>
  );
};


Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
  }
  

export default Contact;

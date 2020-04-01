import React from "react"
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: props.online
        }
    }

    userStatus = () => {
        console.log(this.state.online, !this.state.online)
        this.setState((current) => ({ online: !current.online }));
        
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt=""/>
                <div>
                    <div className="name">{this.props.name}</div>

                    <div className="status">
                        <div
                            className={`status-${this.state.online ? 'online' : 'offline'}`}
                            onClick={this.userStatus}></div>
                        <div
                            className="status-text"> {this.state.online ? 'online' : 'offline'} </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact
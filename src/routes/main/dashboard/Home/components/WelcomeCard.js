import React, { Component } from "react";
import {connect} from "react-redux";
import {Icon} from "antd";

class WelcomeCard extends Component {

  state = {
  }

  render(){
    return (
      <div className="gx-wel-ema">
        <h1 className="gx-mb-3">Welcome {this.props.welcome.name}</h1>
        <p className="gx-fs-sm gx-text-uppercase">You Have</p>
        <ul className="gx-list-group">
          <li>
            <Icon type="message" />
            <span>{this.props.welcome.messages} Unread messages</span>
          </li>
          <li>
            <Icon type="mail" />
            <span>{this.props.welcome.invitations} Pending invitations</span>
          </li>
          <li>
            <Icon type="profile" />
            <span>{this.props.welcome.dueTasks} Due tasks</span>
          </li>
          <li>
            <Icon type="bell" />
            <span>{this.props.welcome.otherNotifications} Other notifications</span>
          </li>
        </ul>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    welcome: state.welcome
  };
}

export default connect(mapStateToProps)(WelcomeCard);

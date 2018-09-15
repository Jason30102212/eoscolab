import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Col, Row, Icon} from 'antd';

class ProjectNotifications extends Component {
  render(){
    return(
      <div className="gx-wel-ema">
        <p className="gx-fs-sm gx-text-uppercase">Project Notifications</p>
        <Row>
          <Col xl={6} lg={6} md={24} xs={24}>
            <Icon type="message" />
            <span>{this.props.welcome.messages} Unread messages</span>
          </Col>
          <Col xl={6} lg={6} md={24} xs={24}>
            <Icon type="mail" />
            <span>{this.props.welcome.invitations} Pending invitations</span>
          </Col>
          <Col xl={6} lg={6} md={24} xs={24}>
            <Icon type="profile" />
            <span>{this.props.welcome.dueTasks} Due tasks</span>
          </Col>
          <Col xl={6} lg={6} md={24} xs={24}>
            <Icon type="bell" />
            <span>{this.props.welcome.otherNotifications} Other notifications</span>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    welcome: state.welcome
  };
}

export default connect(mapStateToProps)(ProjectNotifications);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';

class ColabAnnouncements extends Component {

  renderList() {
    return this.props.colabAnnouncements.map((colabAnnouncement) => {
      return(
        <li
        key={colabAnnouncement.id}
        >
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <p className="gx-mb-md-0 gx-text-light gx-fs-sm gx-font-weight-semi-bold">
              {colabAnnouncement.announcementName}
            </p>
          </Col>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="gx-site-dash gx-pr-lg-5">
        <p className="gx-fs-sm gx-text-uppercase">EosColabs Announcements</p>
          <h6 className="gx-text-uppercase gx-mb-2 gx-mb-lg-5">
            <ul>
              {this.renderList()}
            </ul>
          </h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    colabAnnouncements: state.colabAnnouncements
  };
}

export default connect(mapStateToProps)(ColabAnnouncements);

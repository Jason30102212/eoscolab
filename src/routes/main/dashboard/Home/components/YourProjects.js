import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Card, Row} from 'antd';

class YourProjects extends Component {

  displayProjects = () => {
    return (
      this.props.currentProjects.map((project) => {
        return(
          <li key={project.id}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <p className="gx-mb-md-0 gx-text-light gx-fs-sm gx-font-weight-semi-bold">
                  {project.name}
                </p>
            </Col>
          </li>
        );
      })
    )
  };

  render() {
    return (
      <div className="gx-site-dash gx-pr-lg-5">
        <p className="gx-fs-sm gx-text-uppercase">Your Projects</p>
        <h6 className="gx-text-uppercase gx-mb-2 gx-mb-lg-5">
          <ul>
            {this.displayProjects()}
          </ul>
        </h6>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentProjects: state.currentProjects
  }
}

export default connect(mapStateToProps)(YourProjects);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Card, Row} from 'antd';

class MyProjects extends Component {

  displayContracts = () => {
    return (
      this.props.currentProjects.map((project) => {
          return(
            <li key={project.id}>
              {project.name}
            </li>
          );
      })
    )
  };

  render() {
    return(
      <Row>
        <Col span={24}>
          <Card>
          <p className="gx-fs-sm gx-text-uppercase">Your Projects</p>
            <Row>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <ul>
                  {this.displayContracts()}
                </ul>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentProjects: state.currentProjects
  };
}


export default connect(mapStateToProps)(MyProjects);

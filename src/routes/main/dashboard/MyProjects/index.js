import React from 'react';
import {Card, Col, Row} from 'antd';

import YourProjects from './components/YourProjects';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectNotifications from './components/ProjectNotifications';

const MyProjects = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Row>
            <Col xl={12} lg={12} md={12} xs={24}>
              <YourProjects />
            </Col>
            <Col xl={12} lg={12} md={12} xs={24}>
              <ProjectDisplay />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <Col xl={24} lg={24} md={24} xs={24}>
              <ProjectNotifications />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MyProjects;

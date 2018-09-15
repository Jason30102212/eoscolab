import React from 'react';
import {Card, Col, Row} from 'antd';

import WelcomeCard from './components/WelcomeCard';
import YourProjects from './components/YourProjects';
import YourTokens from './components/YourTokens';
import TaskList from './components/TaskList';
import TeamMembers from './components/TeamMembers';
import TeamMemberDetail from './components/TeamMemberDetail';
import ColabAnnouncements from './components/ColabAnnouncements';

const Home = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Card>
            <Row>
              <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                <WelcomeCard />
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <YourProjects />
              </Col>
              <Col xl={8} lg={24} md={24} sm={24} xs={24} className="gx-visit-col">
                <YourTokens />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card>
            <Row>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                  <ColabAnnouncements />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

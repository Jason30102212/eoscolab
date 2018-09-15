import React from 'react';
import {Card, Col, Row} from 'antd';
import WelcomeCard from '../Home/components/WelcomeCard';
import YourProjects from '../Home/components/YourProjects';
import YourTokens from '../Home/components/YourTokens';

import YourSkillSet from "./components/YourSkillSet";

const MyProfile = () => {
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
      </Row>
      <Row>
        <Col span={24}>
          <Card>
            <Row>
              <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                Welcome
                <YourSkillSet />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MyProfile;

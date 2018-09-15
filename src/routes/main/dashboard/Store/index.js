import React from 'react';
import {Row, Col, Card} from 'antd';

const Store = () => {
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Row>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              Store
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Store;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';

class YourSkillSet extends Component {

  renderList = () => {
      return (
        this.props.yourSkillSet.map((skill) => {
          return(
            <li key={skill.id}>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <p className="gx-mb-md-0 gx-text-light gx-fs-sm gx-font-weight-semi-bold">
                  {skill.skillName}
                </p>
              </Col>
            </li>
          );
        })
      )
  }

  render() {
    return(
      <div className="gx-site-dash gx-pr-lg-5">
        <p className="gx-fs-sm gx-text-uppercase">Your Skill Set</p>
        <h6 className="gx-text-uppercase gx-mb-2 gx-mb-lg-5">
          <ul>
            {this.renderList()}
          </ul>
        </h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    yourSkillSet: state.yourSkillSet
  }
}

export default connect(mapStateToProps)(YourSkillSet);

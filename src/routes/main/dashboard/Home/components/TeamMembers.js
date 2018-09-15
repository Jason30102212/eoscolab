import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTeamMember } from 'appRedux/actions';


class TeamMembers extends Component {
  renderList() {
    return this.props.teamMembers.map((teamMember) => {
      return(
        <li
        key={teamMember.name}
        onClick={() => this.props.selectTeamMember(teamMember)}
        >
          {teamMember.name}
        </li>
      )
    })
  }

  render() {
    return(
      <div className="gx-site-dash gx-pr-lg-5">
        <p className="gx-fs-sm gx-text-uppercase">Team Members</p>
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
  return {
    teamMembers: state.teamMembers
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators({ selectTeamMember: selectTeamMember }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembers);

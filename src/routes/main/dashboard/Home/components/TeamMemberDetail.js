import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamMemberDetail extends Component {
  render(){
    if(!this.props.selectTeamMember) {
      return <div>Select a Team Member</div>
    }
    return(
      <div>
        <h4>User: </h4>
        <span> {this.props.selectTeamMember.name} </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selectTeamMember: state.selectTeamMember
  }
}

export default connect(mapStateToProps)(TeamMemberDetail);

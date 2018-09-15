import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDisplay extends Component {
  render() {
    if(!this.props.selectedProject) {
      return <div>Select a Project</div>
    }
    return(
      <div className="gx-site-dash gx-pr-lg-5">
        <h4 className="gx-fs-sm gx-text-uppercase">Project Details:</h4>
        <h6 className="gx-text-uppercase gx-mb-2 gx-mb-lg-5">
          <span> {this.props.selectedProject.name} </span>
        </h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedProject: state.selectedProject
  }
}

export default connect(mapStateToProps)(ProjectDisplay);

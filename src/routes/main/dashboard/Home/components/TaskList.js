import React, {Component} from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import { taskList } from "./data";
import { changeCompleted } from "appRedux/actions";
import Widget from "components/Widget";
import TaskItem from "./TaskItem";



const TabPane = Tabs.TabPane;

class TaskList extends Component {
  state = {taskList};

/*
  onChange = (data, index) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.map(task => {
        if(task.id === data.id) {
          task.completed = !data.completed;
        }
        return task;
      })
    }))
  };
*/

  onChange = (data, index) => {
    console.log("!!");
    this.props.taskList.map((task) => {
      if(task.id === data.id) {
          {this.props.taskCompleted}
      }
    })
  };

  render() {
    return (
        <Widget title="TASK LIST" styleName="gx-card-tabs gx-card-eq-height">
          <Tabs defaultActiveKey="1">
            <TabPane tab="All Task" key="1">
              {
                this.props.taskList.map((task, index) =>
                  <TaskItem key={index} data={task} onChange={this.props.taskCompleted}/>)
              }
            </TabPane>
            <TabPane tab="My Task" key="2">
              {
                this.props.taskList.map((task, index) =>
                  <TaskItem key={index} data={task} onChange={this.props.taskCompleted}/>)
              }
            </TabPane>
          </Tabs>
        </Widget>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    taskCompleted: () => dispatch({type: 'COMPLETED_TASK', id: 1})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

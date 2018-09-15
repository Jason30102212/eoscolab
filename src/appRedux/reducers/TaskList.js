import _ from 'lodash';

import {
  TASK_TYPES,
  COMPLETED_TASK
} from "constants/TaskTypes";

const initialTaskList = [{
  id: 1,
  title: 'Make dynamic',
  completed: false,
  user: {
    name: 'Joshua Mulski',
    avatar: 'http://via.placeholder.com/150x150',
  },
  dueDate: 'Today',
  tags: [1, 2]
}, {
  id: 2,
  title: 'Design wireframes based on the requirements',
  completed: false,
  user: {
    name: 'Alex Mulski',
    avatar: 'http://via.placeholder.com/150x150',
  },
  dueDate: 'Tomorrow',
  tags: [2, 4]
}, {
  id: 3,
  title: 'Need to define microinteraction on click of signin button',
  completed: false,
  user: {
    name: 'Domnic Harris',
    avatar: 'http://via.placeholder.com/150x150',
  },
  dueDate: 'Today',
  tags: [1, 2, 3]
}, {
  id: 4,
  title: 'New page need to be designed for property listing',
  completed: false,
  user: {
    name: 'Jimmy Harris',
    avatar: 'http://via.placeholder.com/150x150',
  },
  dueDate: 'Today',
  tags: [2, 3, 4]
}, {
  id: 5,
  title: 'Design wireframes based on the requirements',
  completed: false,
  user: {
    name: 'Alex Harris',
    avatar: 'http://via.placeholder.com/150x150',
  },
  dueDate: 'Today',
  tags: [2, 4]
}];

const taskState = (state = initialTaskList, action) => {
  console.log(action.type);
  switch (action.type) {
    case TASK_TYPES:
      return {
        ...state,
        name: action.payload.taskName
      }
    case COMPLETED_TASK:
      console.log("In COMPLETED_TASK");
      return {
        ...state,
        [action.id]:{
          completed: action.completed
        }
      }
      default:
        return state;
  }
}

export default taskState;

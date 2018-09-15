import {
  TASK_TYPES,
  COMPLETED_TASK
} from "constants/TaskTypes";

const changeCompleted = (id = 1) => {
  return {type: COMPLETED_TASK, id}
}

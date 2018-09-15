import {
  ADD_PROJECT
} from "constants/CurrentProjects";

const addProject = (project) => {
  return {type: ADD_PROJECT, project};
}

export default addProject;

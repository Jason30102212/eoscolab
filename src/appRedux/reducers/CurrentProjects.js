import {
  ADD_PROJECT
} from "constants/CurrentProjects";

const initialState = [
  {id: 1, name: "Game Project"},
  {id: 2, name: "Music Project"}
];

const currentProjects = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return null;
    default:
      return state;
  }
}

export default currentProjects;

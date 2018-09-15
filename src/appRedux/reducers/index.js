import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import Settings from "./Settings";
import Auth from "./Auth";
import Welcome from "./Welcome";
import CurrentProjects from "./CurrentProjects";
import YourTokens from "./YourTokens";
import TaskList from "./TaskList";
import TeamMembers from "./TeamMembers";
import SelectTeamMember from "./SelectTeamMember";
import ColabAnnouncements from "./ColabAnnouncements";
import YourSkillSet from "./YourSkillSet";
import SelectedProject from "./SelectedProject";

const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
  auth: Auth,
  welcome: Welcome,
  currentProjects: CurrentProjects,
  yourTokens: YourTokens,
  taskList: TaskList,
  teamMembers: TeamMembers,
  selectTeamMember: SelectTeamMember,
  colabAnnouncements: ColabAnnouncements,
  yourSkillSet: YourSkillSet,
  selectedProject: SelectedProject
});

export default reducers;

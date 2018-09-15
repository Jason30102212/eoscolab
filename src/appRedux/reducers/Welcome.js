import {
  NAME_DISPLAY,
  MESSAGE_COUNT,
  INVITATIONS_COUNT,
  OTHER_NOTIFICATIONS_COUNT
} from "constants/WelcomeTypes";

const initialWelcomeState = {
  name: "John",
  messages: 4,
  invitations: 3,
  dueTasks: 10,
  otherNotifications: 6
}

const welcomeState = (state = initialWelcomeState, action) => {
  switch (action.type) {
    case NAME_DISPLAY:
      return {
        ...state,
        name: action.payload.name
      };
    case MESSAGE_COUNT:
      return {
        ...state,
        messages: action.payload.messages
      };
    case INVITATIONS_COUNT:
      return {
        ...state,
        invitations: action.payload.dueTasks
      };
    case OTHER_NOTIFICATIONS_COUNT:
      return {
        ...state,
        otherNotifications: action.payload.otherNotifications
      };
    default:
      return state;
  }
}

export default welcomeState;

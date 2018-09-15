import {
  NAME_DISPLAY,
  MESSAGE_COUNT,
  INVITATIONS_COUNT,
  OTHER_NOTIFICATIONS_COUNT
} from "constants/WelcomeTypes";

const changeName = (Name) => {
  return {type: NAME_DISPLAY, name};
}

const changeMessageCount = (message_count) {
  return {type: MESSAGE_COUNT, message_count};
}

const changeInvitationsCount = (invitations_count) {
  return {type: INVITATIONS_COUNT, invitations_count};
}

const changeOtherNotificationsCount = (other_notifications_count) {
  return {type: OTHER_NOTIFICATIONS_COUNT, other_notifications_count};
}

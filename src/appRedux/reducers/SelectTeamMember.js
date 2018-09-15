export default function(state = null, action) {
  switch(action.type) {
    case "TEAM_MEMBER_SELECTED":
      return action.payload;
  }
  return state;
}

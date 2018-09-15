export const selectTeamMember = (teamMember) => {
  console.log("Team member selected: ", teamMember);
  return {
    type: "TEAM_MEMBER_SELECTED",
    payload: teamMember
    }
}

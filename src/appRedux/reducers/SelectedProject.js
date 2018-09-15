export default function(state = null, action) {
    console.log(action.type);
  switch(action.type) {
    case "PROJECT_SELECTED":
        return action.payload;
  }
  return state;
}

import {
  TOKEN_TYPES
} from "constants/YourTokenTypes";

const initialTokenState = [
  {id:1, tokenName: "Play Token"},
  {id:2, tokenName: "Vid Token"}
];

const tokenState = (state = initialTokenState, action) => {
  switch (action.type) {
    case TOKEN_TYPES:
      return {
        ...state,
        name : action.payload.tokenName
      };
    default:
      return state;
  }
}

export default tokenState;

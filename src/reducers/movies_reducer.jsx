export default function(state, action) {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case "SET_MOVIES":
        return action.payload;
      default:
        return state;
    }
  }
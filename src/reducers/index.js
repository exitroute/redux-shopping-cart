import * as actions from "../actions/index";

// **************WHERE DOES THE STATE GO?************* 


function form(state = {}, action) {
  switch (action.type) {
    case actions.ON_CHANGE:
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state;
  }
} 

export default form; 
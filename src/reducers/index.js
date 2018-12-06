import * as actions from "../actions/index";

const initialState = JSON.parse( localStorage.getItem('react-cart') ) || {
  data:
  [
    {
      "id":0,
      "name":"JavaScript: The Definitive Guide, 6th Edition",
      "release": "September 2010",
      "amount": 1,
      "price":"2.99"
    },
    {
      "id":1,
      "name":"Ruby on Rails: Up and Running",
      "release": "March 2007",
      "amount": 1,
      "price":"30.99"
    },
    {
      "id":2,
      "name":"MongoDB: The Definitive Guide",
      "release": "Januar 2019",
      "amount": 1,
      "price":"99.99"
    },
            {
      "id":3,
      "name":"Linux Cookbook",
      "release": "Februar 2009",
      "amount": 1,
      "price":"24.99"
    },

  ],
  total: 0,
  // set initial form value
  form: {}
}


console.log("this.initialState: ", initialState);
console.log("this.initialState.form: ", initialState.form);

function form(state = initialState, action) {
  console.log("reducer/ from(action)  ", action); 
  switch (action.type) {
    case actions.ON_CHANGE:
    console.log("reducer/ from(action) in switch: ", action);  
    return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state;
  }
} 

export default form; 
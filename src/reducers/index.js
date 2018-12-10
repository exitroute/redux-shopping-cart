import { combineReducers } from "redux";
import * as actions from "../actions/index";

const initialState = JSON.parse(localStorage.getItem('react-cart')) || {
  data:
    [
      {
        "id": 0,
        "name": "JavaScript: The Definitive Guide, 6th Edition",
        "release": "September 2010",
        "amount": 1,
        "price": "2.99"
      },
      {
        "id": 1,
        "name": "Ruby on Rails: Up and Running",
        "release": "March 2007",
        "amount": 1,
        "price": "30.99"
      },
      {
        "id": 2,
        "name": "MongoDB: The Definitive Guide",
        "release": "Januar 2019",
        "amount": 1,
        "price": "99.99"
      },
      {
        "id": 3,
        "name": "Linux Cookbook",
        "release": "Februar 2009",
        "amount": 1,
        "price": "24.99"
      },

    ],
  total: 0,
  form: {}
};


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
      };
    default:
      return state;
  }
}


function updateItems (state = initialState, action) {
  console.log(`Action called in the reducer`, action);
  console.log("###", action);
  switch (action.type) {
    case "UPDATEITEM":
      return {
        ...state,
        data: [
          ...state.data,
          {
            //TODO find the item instead of create a new one
            [action.id]: action.item.props.data.amount + 1
          }
        ]
      };
      localStorage.setItem('react-cart', JSON.stringify(this.state));

    case "LIKE":
      //console.log("###", action);
      //if ( index === "like" ) {
      //data[item.props.data.id].liked = !data[item.props.data.id].liked 
      //}
      //else if (index)
      //data[item.props.data.id].amount++
      //else if (data[item.props.data.id].amount > 0)
      //data[item.props.data.id].amount--

      //this.props.total = data.map((item, index, array)=> item.price * item.amount).reduce((a, b) => a + b, 0);
      //this.setState(this.state)
      //localStorage.setItem('react-cart', JSON.stringify(this.state));
      return {
        ...state,
        data: [
          ...state.data,
          {
            [action.id]: action.value
          }
        ]
      };
      // localStorage.setItem('react-cart', JSON.stringify(this.state));
    default:
      return state;
  }
}

const appReducer = combineReducers({
  form,
  updateItems
});

export default appReducer;
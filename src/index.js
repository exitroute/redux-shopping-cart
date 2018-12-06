import 'bootstrap';

//React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import form from "./reducers/index"; 

// Components
import App from './App.jsx';

// Create Redux store and initialise the App

let store = createStore(
  form,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById('root')
  );

  console.log("./reducers/index: ", form);



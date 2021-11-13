import ReactDOM from 'react-dom';
import Page from './components/page';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <Page />
  </Provider>,

  document.querySelector("#root")
);
// ReactDOM.render(<Page/> , document.querySelector('#root'));

import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store, { StateType } from './Redux/state'

let onChange = (state: StateType) => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

onChange(store.getState())
store.subscriber(onChange)
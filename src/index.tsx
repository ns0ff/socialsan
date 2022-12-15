import './index.css';
import { state, subscriber } from './Redux/state'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, StateType, changePostText } from './Redux/state'

const reRender = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} newPostText={changePostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reRender(state)
subscriber(reRender)
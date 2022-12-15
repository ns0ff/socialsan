import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, StateType, changePostText } from './Redux/state'

export const reRender = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} newPostText={changePostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
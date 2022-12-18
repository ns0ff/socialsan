import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Conversations from './Components/Conversations/Conversations';
import Header from "./Components/Header/Header";
import Music from './Components/Music/Music';
import Navbar from "./Components/Navbar/Navbar";
import News from './Components/News/News';
import { Profile } from "./Components/Profile/Profile";
import Settings from './Components/Settings/Settings';
import { AppType } from './Redux/state';



const App: React.FC<AppType> = (props) => {
  const state = props.store.getState()

  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path={'/profile'} element={<Profile profile={state.profilePage} dispatch={props.dispatch.bind(props.store)} />} />
            <Route path={'/messages/*'} element={<Conversations conversations={state.conversationPage} dispatch={props.dispatch.bind(props.store)} />} />
            <Route path={'/news'} element={<News />} />
            <Route path={'/music'} element={<Music />} />
            <Route path={'/settings'} element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App

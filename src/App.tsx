import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Conversations from './Components/Conversations/Conversations';
import Header from "./Components/Header/Header";
import Music from './Components/Music/Music';
import Navbar from "./Components/Navbar/Navbar";
import News from './Components/News/News';
import { Profile } from "./Components/Profile/Profile";
import Settings from './Components/Settings/Settings';
import { AppType } from './Redux/state';



function App(props: AppType) {
  return (
    <div className={'app-wrapper'}>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/profile'} element={<Profile profile={props.state.profilePage} addPost={props.addPost} newPostText={props.newPostText} />} />
          <Route path={'/messages/*'} element={<Conversations conversations={props.state.conversationPage} />} />
          <Route path={'/news'} element={<News />} />
          <Route path={'/music'} element={<Music />} />
          <Route path={'/settings'} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

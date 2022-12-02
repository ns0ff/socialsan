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

function App() {
  return (
    <div className={'app-wrapper'}>
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/messages'} element={<Conversations />} />
          <Route path={'/news'} element={<News />} />
          <Route path={'/music'} element={<Music />} />
          <Route path={'/settings'} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.less';
import MyProfile from "./components/MyProfile";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className='App'>
      <MyProfile/>
    </div>
  );
};

export default App;
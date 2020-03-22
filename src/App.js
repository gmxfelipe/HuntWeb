import React from 'react';
import './styles.css';
import api from './services/api';
import Header from './components/Header/index';
import Main from './pages/main/index';


const App = () => (  
    <div className="App">
      <Header />
      <Main />
    </div>
  );

export default App;

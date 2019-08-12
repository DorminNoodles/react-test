import React from 'react';
import logo from './logo.svg';
import './App.css';

import HooksStartup from './components/01_HooksStartup';
import UseMultipleEffect from './components/02_UseEffectMultiple';

function App() {
  return (
    <div className="App">

		<HooksStartup />

		<UseMultipleEffect />

    </div>
  );
}

export default App;

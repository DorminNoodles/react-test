import React from 'react';
import logo from './logo.svg';
import './App.css';

import HooksStartup from './components/01_HooksStartup';
import UseMultipleEffect from './components/02_UseEffectMultiple';
import UseStateWithoutDiff from './components/03_UseStateWithoutDiff';
import UseEffectCleanup from './components/04_UseEffectCleanup';
import SkippingEffect from './components/05_SkippingEffect';
import HooksCustom from './components/06_HooksCustom';
import CallApi from './components/07_CallApi';

function App() {
  return (
    <div className="App">

		<HooksStartup />

		<UseMultipleEffect />

		<UseStateWithoutDiff />

		<UseEffectCleanup />

		<SkippingEffect />

		<HooksCustom />

		<CallApi />

    </div>
  );
}

export default App;

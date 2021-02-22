import React from 'react';
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import IndexView from './views/index'
import './styles/App.scss';

function App() {
  return (
    <div>
      <AppHeader />
      <IndexView />
      <AppFooter />
    </div>
  );
}

export default App;

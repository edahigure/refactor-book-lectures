// Entry point for the build script in your package.json
import './app.css';
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import Greetings from './pages/Greetings';

import store from './redux/store'; // Import your Redux store

import Nav from './components/Nav';

function App() {
  return (
    
    <Router>
      <div className="container-column">
    <Nav />
    <Routes className="container-routes">
      <Route index element={<Greetings />} />      
    </Routes>
  </div>
    </Router>
  );
}
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root'),
);

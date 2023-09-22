// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greetings from './pages/Greetings';

import store from './redux/store'; // Import your Redux store

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Greetings />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Greetings from './pages/Greetings';

import { Provider } from 'react-redux';
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

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'),
);

// Entry point for the build script in your package.json
import './app.css';
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import Greetings from './pages/Greetings';
import AddLecture from './components/AddLecture';
import Details from './components/Details';

import store from './redux/store'; // Import your Redux store

import Nav from './components/Nav';

function App() {
  return (
    
    <Router>
      <div className="container-column">
    <Nav />
    <Routes className="container-routes">
      <Route index element={<Greetings />} /> 
      <Route path="lectures" element={<Greetings />} />
      <Route path="add_lecture" element={<AddLecture />} />
      <Route path="lecture_details" element={<Details />} />
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

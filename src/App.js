import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/shop/:id" component={ItemPage} />
      </div>
    </Router>
  );
}

export default App;

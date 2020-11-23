import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Timetable from './components/Pages/Timetable';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/gym-app' exact component={Home} />
      <Route path='/gym-app/services' component={Services} />

      <Route path='/gym-app/timetable' component={Timetable} />
      <Route path='/gym-app/sign-up' component={SignUp} />
    </Switch>
<Footer />

    </Router>
     
   

    </>
  );
}

export default App;

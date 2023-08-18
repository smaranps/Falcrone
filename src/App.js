import React from 'react'
import './App.css'
import Homes from './Home.js'
import FalcroneAbt from './ABtFal.js'
import Cars from './Cars'
import Contact from './contact.js'
import Login from './Login'
import {
BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom'

function App(){
  return(
    <div id='mainmenu'>
      <Router>
      <div id="bar">
        <ul><li> <Link to="/" className="NavDiv">🏠</Link></li>
        <li><Link to="/Abtcomp" className="NavDiv">About Us</Link></li>
        <li><Link to="/CoolCars" className="NavDiv">Cars</Link></li>
        <li><Link to="/Contact" className="NavDiv">Contact us</Link></li>
        <li><Link to="/LoginSignup" className="NavDiv" id="seperate">Login/Signup</Link></li>
        </ul>
      </div>


<Switch>
  <Route exact path="/"><Homes/></Route>
  <Route path="/Abtcomp"><FalcroneAbt/></Route>
  <Route path="/CoolCars"><Cars/></Route>
  <Route path="/Contact"><Contact/></Route>
  <Route path="/LoginSignup"><Login/></Route>
</Switch>


      </Router>
    </div>
  )
}
export default App
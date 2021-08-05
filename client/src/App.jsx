import './App.css';
import Main from './views/Main';
import OnePirate from './views/OnePirate';
import NewPirate from './views/NewPirate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Link to ="/pirates"><h5 className="navig">Home</h5></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to ="/pirate/new"><h5 className="navig">Add Pirate</h5></Link>
      <br/>
      <Router>
        <Main path="/pirates"/>
        <OnePirate path="/pirate/:_id"/>
        <NewPirate path="/pirate/new"/>
      </Router>      
    </div>
  );
}

export default App;

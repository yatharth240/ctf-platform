import './App.css';
import NavBar from '../src/Components/NavBar'
import Footer from '../src/Components/Footer';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../src/Components/Pages/Home';
import License from '../src/Components/Pages/License';
import About from '../src/Components/Pages/About';
import Team from '../src/Components/Pages/TeamPage';
import ScoreBoard from './Components/Pages/ScoreBoard';
import CreateTeam from '../src/Components/Pages/CreateTeamPage';
import CreateTeamSuccess from '../src/Components/Pages/CreateTeamSuccess';
import Challenges from '../src/Components/Pages/Challenges';

function App() {
  return (
   <>
  <NavBar/>
<Switch>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/license" component = {License}/>
  <Route exact path="/about" component = {About}/>
  <Route exact path="/team" component = {Team}/>
  <Route exact path="/scoreboard" component = {ScoreBoard}/>
  <Route exact path="/createTeam" component = {CreateTeam}/>
  <Route exact path="/createTeamSuccess" component = {CreateTeamSuccess}/>
  <Route exact path="/challenges" component={Challenges}/>
</Switch>
<Footer/>
 
   </>
  );
}

export default App;

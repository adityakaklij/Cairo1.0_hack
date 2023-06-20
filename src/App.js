
import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DeployContract from './Components/DeployContract/DeployContractFile';
import DeployERC20 from './Components/DeployContract/DeployERC20';
import './CSS/App.css';
import ERC721 from './Components/ERC721';


function App() {
  return (
    <>
      <HashRouter basename='/'>
    <div className="App">
       <Navbar/>

      <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/DeployContract">
            <DeployContract/>
          </Route>

          <Route exact path="/DeployERC20">
            <DeployERC20/>
          </Route>

          <Route exact path="/ERC721">
            <ERC721/>
          </Route>
          
        </Switch>

    </div>
    </HashRouter>
    </>
  );
}

export default App;

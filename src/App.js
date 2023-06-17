
import './App.css';
import { BrowserRouter as Router, Switch, Route, HashRouter,} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DeployContract from './Components/DeployContract/DeployContractFile';
import DeployERC20 from './Components/DeployContract/DeployERC20';


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
          
        </Switch>

    </div>
    </HashRouter>
    </>
  );
}

export default App;

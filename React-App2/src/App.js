
import './App.css';

import Menuflower from './Components/Flower/Menuflower.jsx'
import List from './Components/Flower/submenucomponent/List.jsx'
import Add from './Components/Flower/submenucomponent/Add.jsx'
import {
  BrowserRouter as Router,
  
  Route
} from "react-router-dom";
// import Sidebar from './Components/Uidetail/Sidebar.jsx'
// const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      
      <Router>
        <switch>
           <Route exact path='/' component={Menuflower}/>
           <Route exact path='/List' component={List}/>
           <Route exact path='/Add' component={Add}/>
          
          </switch>
      </Router>
    </div>
  );
}

export default App;

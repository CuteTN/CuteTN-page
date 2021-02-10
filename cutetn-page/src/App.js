import logo from './logo.svg';
import { palletes } from './styles/pallete/allPalletes';
import CuteHeader from './components/common/CuteHeader';
import CuteFooter from './components/common/CuteFooter';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom"

import './App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div 
        style={{
          backgroundColor: palletes.colors.pink0,
          height: '100vh', // set fullscreen div.
        }}
      >
        <CuteHeader/>

        <div key="content">
          <Switch>
            <Route exact path='/'>
              <p>Home!</p>
            </Route>
            <Route path='/blogs'>
              <p>Blogs!</p>
            </Route>
            <Route path='/playgrounds'>
              <p>Playgrounds!</p>
            </Route>
          </Switch>
        </div>

        <CuteFooter/>

      </div>
    </Router>
  );
}

export default App;

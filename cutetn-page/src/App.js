import logo from './logo.svg';
import { palletes } from './styles/pallete/allPalletes';
import CuteHeader from './components/common/CuteHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div 
        style={{
          backgroundColor: palletes.colors.pink0,
          height: '100vh', // set fullscreen div.
        }}
      >
        <CuteHeader/>
      </div>
    </Router>
  );
}

export default App;

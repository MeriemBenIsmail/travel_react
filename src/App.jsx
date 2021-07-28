import './app.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';

function App() {
  return (
    <>
    <Router>

      <Navbar />

      <Switch>
          <Route path="/" exact component={Home}/>
      </Switch>

    </Router>

    
    

    </>
  );
}

export default App;

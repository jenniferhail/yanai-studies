import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Experience, Explore, Engage } from "./pages";
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/experience" exact component={() => <Experience />} />
          <Route path="/explore" exact component={() => <Explore />} />
          <Route path="/engage" exact component={() => <Engage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

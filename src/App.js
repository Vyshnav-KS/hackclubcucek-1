import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './Home';
import './index.css';
import Join from './Join';
import Login from './join/Login';
import Signup from './join/Signup';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/join">
                            <Join></Join>
                        </Route>
                        <Route exact path="/join/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/join/signup">
                            <Signup></Signup>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

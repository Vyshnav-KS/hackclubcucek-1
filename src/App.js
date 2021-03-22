import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from './Home';
import './index.css';
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
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

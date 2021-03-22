import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import './index.css';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="content">
                    <Switch>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

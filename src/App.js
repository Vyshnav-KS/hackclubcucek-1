import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Blog from './Blog';
import CreateBlog from './blog/CreateBlog';
import ViewBlog from './blog/ViewBlog';
import Footer from './Footer';
import Home from './Home';
import './index.css';
import Join from './Join';
import Login from './join/Login';
import Signup from './join/Signup';
import Navbar from './Navbar';

function App() {

  return (
    <Router>
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
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/blog/create">
              <CreateBlog></CreateBlog>
            </Route>
            <Route exact path="/blogs/:id">
              <ViewBlog></ViewBlog>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
    </Router>
  );
}

export default App;

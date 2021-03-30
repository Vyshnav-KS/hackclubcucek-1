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
import Profile from './profile/Profile';
import UserProfileUpdate from './profile/UserProfileUpdate';
import UserProfile from './UserProfile';

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
            <Route exact path="/profile/:username">
              <Profile/>
            </Route>
            <Route exact path="/me/update">
              <UserProfileUpdate></UserProfileUpdate>
            </Route>
          </Switch>
        </div>
        {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;

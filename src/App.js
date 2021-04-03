import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import CreatePost from './blog/CreatePost';
import EditBlogPost from './blog/EditBlogPost';
import ViewPost from './blog/ViewPost';
import Home from './Home';
import './index.css';
import Join from './Join';
import Login from './join/Login';
import Signup from './join/Signup';
import ListPosts from './ListPosts';
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
              <ListPosts postType="blog"/>
            </Route>
            <Route exact path="/create">
              <CreatePost/>
            </Route>
            <Route exact path="/blog/:id">
              <ViewPost/>
            </Route>
            <Route exact path="/news/:id">
              <ViewPost/>
            </Route>
            <Route exact path="/events/:id">
              <ViewPost/>
            </Route>
            <Route exact path="/blog/edit/:id">
              <EditBlogPost/>
            </Route>
            <Route exact path="/profile/:username">
              <Profile/>
            </Route>
            <Route exact path="/me/update">
              <UserProfileUpdate></UserProfileUpdate>
            </Route>
            <Route exact path="/events">
              <ListPosts postType="events"/>
            </Route>
            <Route exact path="/news">
              <ListPosts postType="news"/>
            </Route>
            <Route exact path="/me">
              <h1>TO-DO</h1>
            </Route>
            <Route exact path="/about">
              <h1>TO-DO</h1>
            </Route>
            <Route exact path="/contact">
              <h1>TO-DO</h1>
            </Route>
          </Switch>
        </div>
        {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;

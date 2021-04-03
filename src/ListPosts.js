import {useEffect, useRef, useState} from "react";
import useFetch from "./useFetch";
import {serverAddress} from './Utility';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import PostCard from "./components/PostCard";
import {Link} from "react-router-dom";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  container: {
    margin: 'auto',
    width: '80%',
    maxWidth: 600
  },
  title: {
    fontWeight: 'bold'
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  menuOption: {
    marginLeft: 'auto',
    marginRight: 20
  }
})

function generateGridItems(posts, postType) {
  let postsJsx = [];
  for (const post of posts) {
    let postJsx = (
      <Grid item xs={12} md={6} lg={4} key={post.id}>
        <Link to={`/${postType}/${post.id}`}>
          <PostCard
            title={post.title}
            author={post.author}
            previewImg={post.preview}
            previewText={post.preview_text}
            date={post.date}
          />
        </Link>
      </Grid>
    );
    postsJsx.push(postJsx);
  }
  return postsJsx;
}

const ListPosts = ({postType}) => {
  const classes = useStyles();
  const [target, setTarget] = useState({uri:  `${serverAddress}/blogPost.php`, data: {type: 'list', sortby: "date", postType: postType}});
  const [sortBy, setSortBy] = useState("date");
  const [postsJsx, setPostsJsx] = useState([]);
  const [showMenuOption, setShowMenuOption] = useState(false);
  const serverResponse = useFetch(target);

  const menuOptionAnchor = useRef(null);
  const currentStatus = useRef("Loading ...");

  useEffect(() => {
    setTarget({uri:  `${serverAddress}/blogPost.php`, data: {type: 'list', sortby: sortBy, postType: postType}});
  }, [sortBy, postType]);

  useEffect(() => {
    if (serverResponse.error.error) {
      // Fetch request failed
      currentStatus.current = serverResponse.error.msg;
    }
    else if (serverResponse.data) {
      if (serverResponse.data.result) {
        console.log("got 200")
        currentStatus.current = "";
        setPostsJsx(generateGridItems(serverResponse.data.posts, postType));
      }
      else {
        // Error from server
        currentStatus.current = serverResponse.data.err;
      }
    }
  }, [serverResponse.error, serverResponse.data]);


  // Scroll event listener
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("At bottom of the page")
    }
  };

  return (
    <Container >
      <div className={classes.div}>
        <Typography variant="h3" className={classes.title}>
          {postType.toUpperCase()}
        </Typography>
        <Typography className={classes.menuOption}>Sort by: {sortBy} </Typography>
        <IconButton ref={menuOptionAnchor} className="icon" onClick={() => { setShowMenuOption(!showMenuOption)}}>
          <MoreVertIcon/>
          <Menu
            id="simple-menu"
            anchorEl={menuOptionAnchor.current}
            keepMounted
            open={showMenuOption}
          >
            <MenuItem onClick={() => setSortBy("date")}>Date</MenuItem>
            <MenuItem onClick={() => setSortBy("likes")}>Likes</MenuItem>
            <MenuItem onClick={() => setSortBy("title")}>Title</MenuItem>
            <MenuItem onClick={() => setSortBy("author")}>Author</MenuItem>
          </Menu>
        </IconButton>
      </div>

      <Grid container spacing={3} >
        {postsJsx}
      </Grid>
      <Typography variant="button" color="error" >
        {currentStatus.current}
      </Typography>
    </Container>
  );
}

export default ListPosts

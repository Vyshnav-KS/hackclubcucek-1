import {useState} from "react";
import useFetch from "./useFetch";
import {serverAddress} from './Utility';
import * as Messages from "./Messages";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import PostCard from "./components/PostCard";
import {Link} from "react-router-dom";

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
    textAlign: 'center',
    marginBottom: 20
  }
})

const Blog = () => {
  const classes = useStyles();
  const [target, ] = useState({uri:  `${serverAddress}/blogs.php`, data: {sql: ""}});
  const previewData = useFetch(target);

  let currentStatus = '';
  let blogsJsx = [];


  if (previewData.isLoading) {
    // Show loading message
    currentStatus = Messages.Msg_Loading();
  } 
  else {
    if (previewData.error.error) {
      // Fetch request failed
      currentStatus = Messages.Error_showError(previewData.error.msg);
    }
    else if (!previewData.data.result) {
      // Error from server
      currentStatus = Messages.Error_showError(previewData.data.err);
    }
    else {
      // all ok
      currentStatus = '';
      for (const post of previewData.data.blogs) {
        let postJsx = (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Link to={"/blog/" + post.id}>
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
        blogsJsx.push(postJsx);
      }
    }
  } 

  return (
    <Container>
      <Typography variant="h1" className={classes.title}>
        BLOG
      </Typography>
      <Grid container spacing={3}>
        {blogsJsx}
      </Grid>
      <Typography variant="button" color="error" >
        {currentStatus}
      </Typography>
    </Container>
  );
}

export default Blog

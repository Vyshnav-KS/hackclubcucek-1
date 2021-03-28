import {useState} from "react";
import {Link} from "react-router-dom";
import useFetch from "./useFetch";
import {serverAddress} from './Utility';
import * as Messages from "./Messages";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import BlogCard from "./blog/BlogCard";

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
  }
})

const Blog = () => {
  const [target, setTarget] = useState({uri:  `${serverAddress}/blogs.php`, data: {sql: ""}});
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
      for (const blog of previewData.data.blogs) {
        let postJsx = (
          <Grid item xs={12} md={6} lg={4} key={blog.id}>
            <BlogCard post={blog}></BlogCard>
          </Grid>
        );
        blogsJsx.push(postJsx);
      }
    }
  } 

  return (
    <Container>
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

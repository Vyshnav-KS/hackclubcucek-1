
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import useFetch from "../useFetch";
import {getCookie, serverAddress} from "../Utility.js"
import * as Messages from "../Messages";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MarkdownRenderer from 'react-markdown-renderer';
import RenderPost from "./RenderPost";
import PostCard from "../components/PostCard";


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
    width: '90%',
  },

  container2: {
    marginTop: 40,
    marginBottom: 20,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 600
  },

})

const EditBlogPost = () => {
  const {id} = useParams();
  const classes = useStyles()
  // Title, body
  const [title, setTitle] = useState('');
  const [body, setBody] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [previewText, setPreviewText] = useState("");

  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [target, setTarget] = useState({uri: `${serverAddress}/blogPost.php`, data: {type: 'view', id: id}});
  const [isInputValid, setIsInputValid] = useState(true);

  const serverResponse = useFetch(target);
  const history = useHistory();

  const [postPreview, setPostPreview] = useState("");

  if (getCookie("username") === "") {
    history.push("/join/login");
  }
          
  useEffect(() => {
    const interval =setInterval(() => setPostPreview((<MarkdownRenderer markdown={body} options={{html: true}}></MarkdownRenderer>)), 3000);
    return () => {
      clearInterval(interval);
    }
  }, [postPreview])



  let currentStatus = '';

  const verifyInput = () => {
    return (!(title === '' || body === ''));
  }

  // Called when submit button is pressed
  const handleSubmit = () => {
    setIsSubmitPressed(true);
    if (verifyInput()) {
      setTarget({uri: `${serverAddress}/blogPost.php`, data: {
        type: 'edit',
        id: id,
        author: getCookie("username"),
        authorPass: getCookie("hash"),
        title: title,
        content: body,
        preview: previewImg,
        preview_text: previewText
      }});
      console.log("Input Valid");
      setIsInputValid(true);
    } 
    else {
      setIsInputValid(false);
      console.log( "Please Fill above field");
    }
  }

  useEffect(() => {
    // Show loading message
    if (serverResponse.isLoading) {
      currentStatus = "LOADING ....";
    }
    else if (serverResponse.error.error) {
      currentStatus = serverResponse.error.msg;
    }
    else if (serverResponse.data) {
      // Error from server
      if (!serverResponse.data.result) {
        currentStatus = serverResponse.data.err;
      }
      else {
        if (serverResponse.data.post) {
          setTitle(serverResponse.data.post.title);
          setBody(serverResponse.data.post.content);
          setPreviewImg(serverResponse.data.post.preview);
          setPreviewText(serverResponse.data.post.preview_text);
        }
        else if (serverResponse.data.post_updated) {
          history.push("/blog");
        }
      }
    }
  }, [serverResponse.data, serverResponse.isLoading, serverResponse.error]);

  // if (isSubmitPressed) {
  //   if (serverResponse.isLoading) {
  //     // Show Loading Message
  //     currentStatus = Messages.Msg_Loading();
  //   } 
  //   else {
  //     if (serverResponse.error.error) {
  //       // Fetch request failed
  //       currentStatus = Messages.Error_showError(serverResponse.error.msg);
  //     } 
  //     else if (!serverResponse.data.result) {
  //       // Error from server
  //       currentStatus = Messages.Error_showError(serverResponse.data.err);
  //     } 
  //     else {
  //       // All ok
  //       history.push("/blog");
  //     }
  //   }
  // }


  return (
    <Container className={classes.container}>
      {/* heading */}
      <Typography variant="h2">
        Create Blog Post
      </Typography>

      {/* Title */}
      <TextField className={classes.field}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Title" 
        variant="outlined" 
        color="secondary" 
        fullWidth
        required
        error={!isInputValid}
      />

      {/* Body */}
      <TextField className={classes.field}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        label="Content(Markdown or HTML)"
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rows={18}
        required
        error={!isInputValid}
      />

      {/* Preview Img */}
      <TextField className={classes.field}
        value={previewImg}
        onChange={(e) => setPreviewImg(e.target.value)}
        label="Preview Image (Link)" 
        variant="outlined" 
        color="secondary" 
        fullWidth
      />

      {/* Preview Text */}
      <TextField className={classes.field}
        value={previewText}
        onChange={(e) => setPreviewText(e.target.value)}
        label="Preview Text (Will be shown on card)" 
        variant="outlined" 
        color="secondary" 
        multiline
        rows={3}
        fullWidth
      />

      {/* Submit Button */}
      <Button className={classes.field}
        type="submit" 
        color="secondary" 
        variant="contained"
        onClick= {handleSubmit}
        disabled={isSubmitPressed && !currentStatus} // disable button when submit is pressed and no status msg
      >
        Update
      </Button>
      <Typography variant="button" color="error" >
        { currentStatus }
      </Typography>

      <Container className={classes.container2}>
        <Typography variant="h2" color="primary" >
          Card Preview
        </Typography>

        <PostCard
          title={title}
          author={getCookie("username")}
          previewImg={previewImg}
          previewText={previewText}
        />
        <br/><br/><br/>
        <Typography variant="h2" color="primary" >
          Post Preview
        </Typography>
      </Container>

      <RenderPost
        title={title}
        previewImg={previewImg}
        postPreview={postPreview}
      />
      <br/><br/><br/>
    </Container>
  );
}

export default EditBlogPost

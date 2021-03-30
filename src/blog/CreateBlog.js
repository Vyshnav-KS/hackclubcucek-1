import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";
import {getCookie, serverAddress} from "../Utility.js"
import * as Messages from "../Messages";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import BlogCardPreview from "./BlogCardPreview";

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
  }

})

const CreateBlog = () => {
  const classes = useStyles()
  // Title, body
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [previewImg, setPreviewImg] = useState("");
  const [previewText, setPreviewText] = useState("");

  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [target, setTarget] = useState({uri: '', data: {}});
  const [isInputValid, setIsInputValid] = useState(true);

  const serverResponse = useFetch(target);
  const history = useHistory();

  let currentStatus = '';

  const verifyInput = () => {
    return (!(title === '' || body === ''));
  }

  // Called when submit button is pressed
  const handleSubmit = () => {
    setIsSubmitPressed(true);
    if (verifyInput()) {
      setTarget({uri: `${serverAddress}/createBlogPost.php`, data: {
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

  if (isSubmitPressed) {
    if (serverResponse.isLoading) {
      // Show Loading Message
      currentStatus = Messages.Msg_Loading();
    } 
    else {
      if (serverResponse.error.error) {
        // Fetch request failed
        currentStatus = Messages.Error_showError(serverResponse.error.msg);
      } 
      else if (!serverResponse.data.result) {
        // Error from server
        currentStatus = Messages.Error_showError(serverResponse.data.err);
      } 
      else {
        // All ok
        history.push("/blog");
      }
    }
  }


  return (
    <Container className={classes.container}>
      {/* heading */}
      <Typography variant="h2">
        Create Blog Post
      </Typography>

      {/* Title */}
      <TextField className={classes.field}
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
        onChange={(e) => setBody(e.target.value)}
        label="Content"
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rows={10}
        required
        error={!isInputValid}
      />

      {/* Preview Img */}
      <TextField className={classes.field}
        onChange={(e) => setPreviewImg(e.target.value)}
        label="Preview Image (Link)" 
        variant="outlined" 
        color="secondary" 
        fullWidth
      />

      {/* Preview Text */}
      <TextField className={classes.field}
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
        Submit
      </Button>
      <Typography variant="button" color="error" >
        { currentStatus }
      </Typography>

      <Container className={classes.container2}>
        <Typography variant="h2" color="primary" >
          Preview
        </Typography>
        <BlogCardPreview post={{title: title, author: getCookie("username"), preview: previewImg, preview_text: previewText}}></BlogCardPreview>
      </Container>
    </Container>
  );
}

export default CreateBlog

import {useState} from "react";
import {useParams} from "react-router";
import {Error_showError, Msg_Loading} from "../Messages";
import useFetch from "../useFetch";
import {serverAddress} from "../Utility";
import RenderPost from "./RenderPost";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1200,
    margin: 'auto',
    marginTop: 0
  }
})


const ViewBlog = () => {
  const classes = useStyles()
  const {id} = useParams();
  const [target, ] = useState({uri: `${serverAddress}/viewBlogPost.php`, data: {id: id}});
  const serverResponse = useFetch(target);

  let currentStatusJsx = "";
  let title="";
  let previewImg="";
  let content="";
  console.log(target.uri);

  if (serverResponse.isLoading) {
    currentStatusJsx = Msg_Loading();
  }
  else if (serverResponse.error.error) {
    currentStatusJsx = Error_showError(serverResponse.error.msg);
  }
  else if (!serverResponse.data.result) {
    currentStatusJsx = Error_showError(serverResponse.data.err);
  }
  else {
    title = serverResponse.data.post.title;
    previewImg = serverResponse.data.post.preview;
    content = (<div dangerouslySetInnerHTML={{ __html: serverResponse.data.post.content}}/>)
  }
  return (
    <div className={classes.root}>
      <RenderPost
        title={title}
        previewImg={previewImg}
        postPreview={content}
      />
        {currentStatusJsx}
    </div>
  );
}

export default ViewBlog

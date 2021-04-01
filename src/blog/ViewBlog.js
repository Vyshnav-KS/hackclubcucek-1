import {useRef, useState} from "react";
import {useHistory, useParams} from "react-router";
import {Error_showError, Msg_Loading} from "../Messages";
import useFetch from "../useFetch";
import {getCookie, serverAddress} from "../Utility";
import RenderPost from "./RenderPost";
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import UserAvatar from "../components/UserAvatar";
import Container from '@material-ui/core/Container'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import MarkdownRenderer from 'react-markdown-renderer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) =>({
  root: {
    width: '100%',
    maxWidth: 1200,
    margin: 'auto',
    marginTop: 0,
    marginBottom: 40
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  avatarContainer: {
     display: 'flex',
    paddingLeft: 0,
    marginTop: 10
  },
  largeIcon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  iconText: {
    display: 'flex',
    justifyContent: 'left',
    marginLeft: 10,
    paddingTop: 5
  },
  optionBtn: {
    marginLeft: 'auto',
  }
}));

const showOptionBtn = (author, anchorEl , showMenu) => {
  let options="";
  if (getCookie("username") === author) {
    console.log("You are the author")
    options = (
      <div>
        <MenuItem>EditPost</MenuItem>
        <MenuItem>Delete Post</MenuItem>
      </div>
    );
  }
  else {
    options = (
      <div>
        <MenuItem>Report Post</MenuItem>
      </div>
    );
  }
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={showMenu}
    >
      {options}
    </Menu>
  );
}

const ViewBlog = () => {
  const classes = useStyles()
  const {id} = useParams();
  const [target, ] = useState({uri: `${serverAddress}/viewBlogPost.php`, data: {id: id}});
  const [showMenuOption, setShowMenuOption] = useState(false);
  const menuOptionAnchor = useRef();
  const serverResponse = useFetch(target);
  const history = useHistory();

  let currentStatusJsx = "";
  let title="";
  let previewImg="";
  let content="";
  let author="";
  let date="";
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
    author = serverResponse.data.post.author;
    date = serverResponse.data.post.date;
    content = (<MarkdownRenderer markdown={serverResponse.data.post.content} options={{html: true}}></MarkdownRenderer>)
  }


  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {/* Avatar Container */}
      <Container className={classes.avatarContainer}>
        <Button onClick={ () => history.push("/profile/" + author)}>
          {author && (<UserAvatar username={author} className={classes.largeIcon}/>)}
          <div>
            <Typography variant="h6" className={classes.iconText}>{author}</Typography>
            <Typography variant="h7" className={classes.iconText}>{date}</Typography>
          </div>
        </Button>
        {/* Menu Button */}
        <IconButton ref={menuOptionAnchor} className={classes.optionBtn} onClick={() => { setShowMenuOption(!showMenuOption)}}>
          <MoreVertIcon/>
          {showOptionBtn(author, menuOptionAnchor.current, showMenuOption)}
        </IconButton>
      </Container>
      <br/><br/>
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

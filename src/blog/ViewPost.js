import { useEffect, useRef, useState} from "react";
import {useHistory, useParams} from "react-router";
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
import {Link} from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
  },
  popupPaper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  likeButton : {
    marginTop: 20,
  },
  likeIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  }
}));

const showOptionBtn = (author, anchorEl , showMenu, id, deleteConfirm) => {
  let options="";
  if (getCookie("username") === author) {
    options = (
      <div>
        <Link to={"/blog/edit/" + id}><MenuItem>EditPost</MenuItem></Link>
        <MenuItem onClick={() => deleteConfirm(true)}>Delete Post</MenuItem>
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

const ViewPost = () => {
  const classes = useStyles()
  const {id} = useParams();
  const [target, ] = useState({uri: `${serverAddress}/blogPost.php`, data: {type: 'view', id: id, user: getCookie('username')}});
  const [target2, setTarget2] = useState({uri: '', data: {}});

  const [showMenuOption, setShowMenuOption] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const menuOptionAnchor = useRef();
  const serverResponse = useFetch(target);
  const serverResponse2 = useFetch(target2);
  const history = useHistory();

  const currentStatusJsx = useRef('');
  const [post, setPost] = useState({
    title: '', previewImg: '', author: '',
    date: '', content: '', likes: 0, likedByUser: false
  });
  const [postLiked, setPostLiked] = useState(false);

  // Watch Post
  useEffect(() => {
    if (serverResponse.error.error) {
      currentStatusJsx.current = serverResponse.error.msg;
    }
    else if (serverResponse.data) {
      if (!serverResponse.data.result) {
        currentStatusJsx.current = serverResponse.data.err;
      }
      else {
        currentStatusJsx.current = '';
        let postData = {title: '', previewImg: '', author: '', date: '', content: '', likes: 0};
        postData.title = serverResponse.data.post.title;
        postData.previewImg = serverResponse.data.post.preview;
        postData.author = serverResponse.data.post.author;
        postData.date = serverResponse.data.post.date;
        postData.likes = serverResponse.data.post.likes;
        postData.content = (<MarkdownRenderer markdown={serverResponse.data.post.content} options={{html: true}}></MarkdownRenderer>)
        setPost(postData);
        if (serverResponse.data.post.userLike == 1) {
          setPostLiked(true);
        }
      }
    }
  }, [serverResponse.error, serverResponse.data]);

  useEffect(() => {
    if (serverResponse2.data && serverResponse2.data.result) {
      console.log("Likes = " + serverResponse2.data.likes);
      setPost({ ...post, likes: serverResponse2.data.likes});
    }
  }, [serverResponse2.data])

  const handlePostLikePress = () => {
    setPostLiked(!postLiked);
    setTarget2({uri: `${serverAddress}/blogPost.php`, data: {type: 'like', blogId: id,
      user: getCookie('username'), hash: getCookie('hash'), value: !postLiked}});
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {post.title}
      </Typography>
      {/* Avatar Container */}
      <Container className={classes.avatarContainer}>
        <Button onClick={ () => history.push("/profile/" + post.author)}>
          {post.author && (<UserAvatar username={post.author} className={classes.largeIcon}/>)}
          <div>
            <Typography variant="h6" className={classes.iconText}>{post.author}</Typography>
            <Typography variant="h7" className={classes.iconText}>{post.date}</Typography>
          </div>
        </Button>
        {/* Menu Button */}
        <IconButton ref={menuOptionAnchor} className={classes.optionBtn} onClick={() => { setShowMenuOption(!showMenuOption)}}>
          <MoreVertIcon/>
          {showOptionBtn(post.author, menuOptionAnchor.current, showMenuOption, id, setShowDeleteConfirm)}
          <DeleteConfirmation open={showDeleteConfirm} setOpen={setShowDeleteConfirm} postId={id}/>
        </IconButton>
      </Container>
      <br/><br/>
      <RenderPost
        title={post.title}
        previewImg={post.previewImg}
        postPreview={post.content}
      />
      <IconButton aria-label="add to favorites" className={classes.likeButton} onClick={handlePostLikePress} >
        {postLiked && (<FavoriteIcon className={classes.likeIcon}/>)}
        {!postLiked && (<FavoriteBorderIcon className={classes.likeIcon}/>)}
        <Typography variant='h5'>{post.likes}</Typography>
      </IconButton>
      {currentStatusJsx.current}
    </div>
  );
}

export default ViewPost

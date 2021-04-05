import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import UserAvatar from './UserAvatar';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  img: {
    width: '100%',
    height: 300
  }
})
const PostCard = ({title, previewImg, author, previewText, date="17-11-2000", likes=0}) => {
  
  const classes = useStyles();

  return (
    <Card elevation={1}>
      <CardMedia
        component="img"
        alt={title}
        src={previewImg}
        width="160" 
        height="200"
        title={title}
      />
      <CardHeader
        title={author}
        subheader={date}
        avatar={
          <UserAvatar
            username={author}
          />
        }
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {previewText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteIcon/> 
        <Typography>
          {likes}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default PostCard



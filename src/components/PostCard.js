
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import UserAvatar from './UserAvatar';

const PostCard = ({title, previewImg, author, previewText, date="17-11-2000"}) => {
  return (
      <Card elevation={1}>
        <CardMedia
          component="img"
          alt={title}
          src={previewImg}
          width="160" 
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
      </Card>
  );
}

export default PostCard



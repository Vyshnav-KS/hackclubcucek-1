import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'


const BlogCardPreview = ({post}) => {
  return (
      <Card elevation={1}>
        <CardMedia
          component="img"
          alt={post.title}
          src={post.preview}
          width="160" 
          title={post.title}
        />
        <CardHeader
          title={post.author}
          subheader="20-5-2021"
        avatar={
          <Avatar aria-label="recipe">
            {post.author[0]}
          </Avatar>
        }
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {post.preview_text}
          </Typography>
        </CardContent>
      </Card>
  );
}

export default BlogCardPreview

import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#f7f7f7',
  },

  post: {
    margin: 20,
  },

  image: {
    width: '100%',
    maxHeight: 500
  }
})

const RenderPost = ({title, previewImg, postPreview}) => {
  const classes = useStyles()
  return (
    <Paper elevation={0} variant="outlined" className={classes.paper}>
      <CardMedia
        className={classes.image}
        component="img"
        alt={title}
        src={previewImg}
        width="100%" 
      />
      <Typography className={classes.post}>
        {postPreview}
      </Typography>
    </Paper>
  );
}

export default RenderPost

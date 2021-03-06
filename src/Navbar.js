// File for Navbar component
import {useHistory} from "react-router-dom";
import hackclub_logo from './images/hackclub.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import UserIconMenu from "./navbar/UserIconMenu";
import SideDrawer from "./navbar/SideDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    top: 0,
    position: 'fixed',
    marginBottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  container: {
    display: 'inline-block',
    textAlign: 'right'
  },
  emptyDiv: {
    margin: 60,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const onHomeClick = () => {
    history.push("/");
  }
  const onBlogClick = () => {
    history.push("/blog");
  }

  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <SideDrawer/>
          <Button onClick={() => history.push('/')}>
            <Avatar 
              className={classes.medium}
              alt="Hackclub_logo"
              src={hackclub_logo}
            />
          </Button>
          <Typography variant="h6" className={classes.title}>
            HC|Cucek
          </Typography>
          <Container className={classes.container}>
            <Hidden only={['xs']}>
              <Button color="inherit" onClick={onHomeClick}>HOME</Button>
              <Button color="inherit" onClick={onBlogClick}>BLOG</Button>
            </Hidden>
          </Container>
          <UserIconMenu/>
        </Toolbar>
      </AppBar>
      <div className={classes.emptyDiv}></div>
    </div>
  );
}

export default Navbar

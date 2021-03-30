import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useState} from 'react';
import {useHistory} from 'react-router';

const useStyles = makeStyles({
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
});

const SideDrawer = () => {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const history = useHistory();

  return (
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setShowSideDrawer(!showSideDrawer)}>
      <MenuIcon />
      <Drawer open={showSideDrawer}>
      <List className={classes.list}>
        <ListItem button onClick={() => history.push("/blog")}>
          <ListItemText primary="BLOGS"/>
        </ListItem>

        <ListItem button onClick={() => history.push("/blog/create")}>
          <ListItemText primary="CREATE BLOG POST"/>
        </ListItem>

        <ListItem button>
          <ListItemText primary="EVENTS"/>
        </ListItem>
        <Divider/>

        <ListItem button>
          <ListItemText primary="ABOUT"/>
        </ListItem>

        <ListItem button>
          <ListItemText primary="CONTACT US"/>
        </ListItem>
      </List>
      </Drawer>
    </IconButton>
  );
}

export default SideDrawer

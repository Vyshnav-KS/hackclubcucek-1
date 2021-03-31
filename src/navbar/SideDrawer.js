import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useState} from 'react';
import {useHistory, useLocation} from 'react-router';
import {getCookie} from '../Utility';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  active: {
    background: '#f4f4f4'
  }
});

const SideDrawer = () => {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const primaryList = [
    {
      name: "BLOGS",
      path: "/blog"
    },
    {
      name: "CREATE NEW POST",
      path: "/blog/create"
    },
    {
      name: "EVENTS",
      path: "/events"
    },
    {
      name: "NEWS",
      path: "/news"
    },
  ];

  const personalList = [
    {
      name: "MY PROFILE",
      path: "/profile/" + getCookie("username")
    },
    {
      name: "ACCOUNT MENU",
      path: "/me"
    },
  ];

  const siteInfoList = [
    {
      name: "ABOUT",
      path: "/about"
    },
    {
      name: "CONTACT US",
      path: "/contact"
    },
  ];

  return (
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setShowSideDrawer(!showSideDrawer)}>
      <MenuIcon />
      <Drawer open={showSideDrawer}>
        <div role="presentation">
          <List className={classes.list}>
            {primaryList.map(item => (
              <ListItem button onClick={() => history.push(item.path)} key={item.name} className={location.pathname === item.path ? classes.active : null}>
                <ListItemText primary={item.name}/>
              </ListItem>
            ))}
            <Divider/>

            {personalList.map(item => (
              <ListItem button onClick={() => history.push(item.path)} key={item.name} className={location.pathname === item.path ? classes.active : null}>
                <ListItemText primary={item.name}/>
              </ListItem>
            ))}
            <Divider/>

            {siteInfoList.map(item => (
              <ListItem button onClick={() => history.push(item.path)} key={item.name} className={location.pathname === item.path ? classes.active : null}>
                <ListItemText primary={item.name}/>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </IconButton>
  );
}

export default SideDrawer

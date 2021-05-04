import React, { useContext } from 'react';
import "../App.css";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Context } from '../contexts/contextAPI';
import { AuthContext } from '../contexts/AuthContext';
import { Link, Redirect, useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#110011",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,

  },
  logo: {
    fontSize: "20px"
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const { cart } = useContext(Context);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleClick = () => {
    history.push("/mycart")
  }

  const handleUser = () => {

    if (localStorage.getItem('user-info')) {
      localStorage.removeItem('user-info')
      window.location.reload();
    }
    else {
      history.push("/signin")
    }
  }

  const handleUserSignUp = () => {

   
      history.push("/signup")

  }


  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <div style={{ marginTop: 8 }} className={clsx(classes.logo, "header")}>
              Great Indian Kitchen
            </div>

          </Box>
          <Box display='flex'>
            <div>
              <IconButton aria-label="cart" color="inherit" onClick={handleClick}>
                <StyledBadge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </div>
          </Box>
          <Box>
            <div>
              <IconButton aria-label="account" color="inherit" aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle />
                <div style={{ fontSize: "12px" }}>
                  {
                    localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')).name.toUpperCase() : null
                  }

                </div>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openMenu}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <ListItem onClick={handleUser}>
                    <ListItemIcon>{localStorage.getItem('user-info') ? <ExitToAppIcon color="secondary" /> : <AccountCircle color="secondary" />}</ListItemIcon>
                    {
                      localStorage.getItem('user-info') ?
                        <div>
                          <Typography color="secondary">
                            Log  Out
                          </Typography>
                        </div>
                        :
                        <div>
                          <Typography color="secondary">
                            <Link to="/signin"></Link>
                              Log  In
                          </Typography>
                        </div>
                    }

                  </ListItem>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItem onClick={handleUserSignUp}>
                    <ListItemIcon>{localStorage.getItem('user-info') ? <ExitToAppIcon color="secondary" /> : <AccountCircle color="secondary" />}</ListItemIcon>
                    {
                      localStorage.getItem('user-info') ?
                        <div>
                        </div>
                        :
                        <div>
                          <Typography color="secondary">
                            <Link to="/signin"></Link>
                              Sign Up
                          </Typography>
                        </div>
                    }

                  </ListItem>
                </MenuItem>
              </Menu>
            </div>
          </Box>

        </Toolbar>
      </AppBar>

    </div>
  );
}
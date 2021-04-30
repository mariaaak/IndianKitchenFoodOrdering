import React from 'react';
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
import Collapse from '@material-ui/core/Collapse';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, Redirect, useHistory } from 'react-router-dom';

const drawerWidth = 240;



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
    },
    subitem:{
        paddingLeft: theme.spacing(4)
    }
}));


const AdminNav = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [openItem,setOpenItem]=React.useState(false);
    const [openExplore,setOpenExplore]=React.useState(false);
    
    const handleItem = () => {
        setOpenItem(!openItem);
    };

    const handleExplore = () => {
        setOpenExplore(!openExplore);
    };

  
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleUser = () => {

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
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div style={{ marginTop: 8 }} className={clsx(classes.logo, "header")}>
                            Great Indian Kitchen
                         </div>

                    </Box>

                    <Box>
                        <div>
                            <IconButton aria-label="account" color="inherit">
                                <AccountCircle />
                                <div style={{ fontSize: "12px" }}>
                                    {
                                        localStorage.getItem('admin-info') ? JSON.parse(localStorage.getItem('user-info')).name.toUpperCase() : null
                                    }

                                </div>
                            </IconButton>
                        </div>
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="View Customer" />
                    </ListItem>
                    <ListItem button onClick={handleItem}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Items" />
                        {openItem ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openItem} timeout="auto" unmountOnExit>
                        <ListItem className={classes.subitem}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Add Items" />
                        </ListItem>
                        <ListItem className={classes.subitem}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="View Items" />
                        </ListItem>
                        <ListItem className={classes.subitem}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Delete Items" />
                        </ListItem>
                    </Collapse>
                    <ListItem button onClick={handleExplore}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Explore" />
                        {openExplore ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openExplore} timeout="auto" unmountOnExit>
                        <ListItem className={classes.subitem}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Add Explore" />
                        </ListItem>
                        <ListItem className={classes.subitem}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="View Explore" />
                        </ListItem>
                        <ListItem className={classes.subitem}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Delete Explore" />
                        </ListItem>
                    </Collapse>
                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Transactions" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem button onClick={handleUser}>
                        <ListItemIcon>{localStorage.getItem('admin-info') ? <ExitToAppIcon color="secondary" /> : <AccountCircle color="secondary" />}</ListItemIcon>
                        {
                            localStorage.getItem('admin-info') ?
                                <div>
                                    <Typography color="secondary">
                                        Log  Out
                                    </Typography>
                                </div>
                                :
                                <div>
                                    <Typography color="secondary">
                                        <Link to="/login"></Link>
                                        Log  In
                                    </Typography>
                                </div>
                        }

                    </ListItem>
                </List>
            </Drawer>

        </div>
    )
}

export default AdminNav;
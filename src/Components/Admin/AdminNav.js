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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
    subitem: {
        paddingLeft: theme.spacing(4)
    }
}));


const AdminNav = () => {

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [openItem, setOpenItem] = React.useState(false);
    const [openExplore, setOpenExplore] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


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
        if (localStorage.getItem('admin-info')) {
            localStorage.removeItem('admin-info')
            window.location.reload();
        }
        else {
            history.push("/signin")
        }

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
                            <IconButton aria-label="account" color="inherit" aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}>
                                <AccountCircle />
                                <div style={{ fontSize: "12px" }}>
                                    {
                                        localStorage.getItem('admin-info') ? JSON.parse(localStorage.getItem('admin-info')).name.toUpperCase() : null
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
                                                        <Link to="/signin"></Link>
                                                            Log  In
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
                    <Link to="/admin/usersView" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="View Customer" />
                        </ListItem>
                    </Link>
                    <Link to="/admin/paymentView" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Transactions" />
                        </ListItem>
                    </Link>
                    <Link to="/admin/reservationView" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Reservations" />
                        </ListItem>
                    </Link>
                    <Link to="/admin/orders" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={handleItem}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Items" />
                        {openItem ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openItem} timeout="auto" unmountOnExit>
                        <Link to="/admin/addItem" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem className={classes.subitem}>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary="Add Items" />
                            </ListItem>
                        </Link>

                        <Link to="/admin/itemView" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem className={classes.subitem}>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary="View Items" />
                            </ListItem>
                        </Link>
                    </Collapse>
                    <ListItem button onClick={handleExplore}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Explore" />
                        {openExplore ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openExplore} timeout="auto" unmountOnExit>
                        <Link to="/admin/addExplore" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem className={classes.subitem}>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary="Add Explore" />
                            </ListItem>
                        </Link>
                        <Link to="/admin/viewExplore" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <ListItem className={classes.subitem}>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary="View Explore" />
                            </ListItem>
                        </Link>
                    </Collapse>


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
                                        <Link to="/"></Link>
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
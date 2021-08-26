import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from '../store/actions/profile'

export default function Menu() {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })

            dispatch(changeIsAuthed(Boolean(user)))
        })
    }, []);
    const handleSignOut = (e) => {
        e.preventDefault()
        firebase.auth().signOut()
    };
    return (
        <React.Fragment>
            <AppBar
                position="relative"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <List component="nav">
                    <ListItem component={Link} to="/" divider button>
                        Home
                    </ListItem>
                    <ListItem component={Link} to="/chats" divider button>
                        Chats
                    </ListItem>
                    <ListItem component={Link} to="/profile" divider button>
                        Profile
                    </ListItem>
                    <ListItem component={Link} to="/news" divider button>
                        News
                    </ListItem>
                    <ListItem component={Link} to="/login" divider button>
                        Login
                    </ListItem>
                    <ListItem component={Link} to="/" divider button onClick={handleSignOut}>
                        Sign out
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}
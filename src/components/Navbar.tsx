// Packages
import { AppBar, Box, Button, Dialog, DialogContent, DialogTitle, Hidden, IconButton, List, ListItem, Slide, Toolbar, Typography, ListItemText, ListItemIcon } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close as CloseIcon, Menu as MenuIcon, Link as LinkIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// useStyles
const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            maxHeight: '100vh',
        },
        title: {
            flexGrow: 1,
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
            cursor: "pointer"
        },
        buttonBox: {
            display: "flex",
        },
        dialogTitle: {
            textAlign: 'right'
        },
    })
);

// Transition
const Transition = React.forwardRef((
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) => {
    return (
        <Slide
            direction="left"
            timeout={2000}
            ref={ref} {...props}
        />
    );
});

// Navbar
const Navbar: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" elevation={1}>
                <Toolbar>
                    <Typography 
                        component={Link} 
                        variant="h6" 
                        className={classes.title}
                        to="/"
                    >
                        GraphQL Authentication
                    </Typography>
                    <Hidden smUp>
                        <IconButton 
                            color="inherit"
                            onClick={handleOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden xsDown>
                        <Button 
                            component={Link}
                            variant="contained" 
                            color="primary" 
                            disableElevation
                            to="/login"
                        >
                            Login
                        </Button>
                        <Box mx={1} />
                        <Button 
                            component={Link}
                            variant="contained" 
                            color="primary" 
                            disableElevation
                            to="/register"
                        >
                            Register
                        </Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden smUp>
                <Dialog 
                    fullScreen 
                    open={open} 
                    onClose={handleClose} 
                    TransitionComponent={Transition} 
                >
                    <DialogTitle className={classes.dialogTitle}>
                        <IconButton
                            color="primary"
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <List component="div">
                            <ListItem 
                                button
                                component={Link}
                                to="/login"
                            >
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItem>
                            <ListItem 
                                button
                                component={Link}
                                to="/register"
                            >
                                <ListItemIcon>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText primary="Register" />
                            </ListItem>
                        </List>
                    </DialogContent>
                </Dialog>
            </Hidden>
        </div>
    );
}

// Export
export default Navbar;
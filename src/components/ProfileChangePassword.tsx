// Packages
import React from "react"
import { Typography, Box, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// useStyles
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            width: "100%",
            [theme.breakpoints.up('md')]: {
                width: "40%",
            }
        },
        success: {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.common.white,
            "&:hover": {
                backgroundColor: theme.palette.success.dark,
            }
        }
    })
);

// ProfileChangePassword
const ProfileChangePassword: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5">
                Change Password
            </Typography>
            <Box mt={3} className={classes.box}>
                <TextField
                    error={false}
                    label="Old password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    size="small"
                    color="primary"
                />
                <Box py={2} />
                <TextField
                    error={false}
                    label="New password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    size="small"
                    color="primary"
                />
                <Box py={2} />
                <TextField
                    error={false}
                    label="Confirm new password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    size="small"
                    color="primary"
                />
                <Box py={2} />
                <Button
                    className={classes.success}
                    variant="contained"
                    disableElevation
                >
                    Update password
                </Button>
            </Box>
        </>
    );
}

// Exports
export default ProfileChangePassword;
// Packages
import React from "react"
import { Typography, Box, Button } from "@material-ui/core";
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
        error: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.common.white,
            "&:hover": {
                backgroundColor: theme.palette.error.dark,
            }
        }
    })
);

// ProfileDangerZone
const ProfileDangerZone: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5">
                Danger Zone
            </Typography>
            <Box mt={3} className={classes.box}>
                <Typography variant="body2">
                    Once you delete your account, it will be permanently deleted
                </Typography>
                <Box py={1} />
                <Button
                    className={classes.error}
                    variant="contained"
                    disableElevation
                >
                    Delete account
                </Button>
            </Box>
        </>
    );
}

// Exports
export default ProfileDangerZone;
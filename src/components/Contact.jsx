import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(() => ({
    contact: {
        backgroundImage: 'url(/naturalpool.jpg)',
        width: '100%', 
        height: '100%', 
        position: 'fixed'
    }
}))
function Contact(props) {
    const classes = useStyles();
    return (
        <div className={classes.contact}>
            page contact
        </div>
    );
}

export default Contact;
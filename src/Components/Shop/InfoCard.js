import "nes.css/css/nes.min.css";
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        width: '40vh',
        height: '70vh',
        backgroundColor: '#fff',
        borderRadius: '50px',
        marginLeft: '8vh',
        marginTop: '15vh',
        border: '4mm ridge rgba(250, 216, 89, 1)',
        backgroundColor: '#e2e2e2',
        marginRight:'5vh'
    }

}))



export default function InfoCard() {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            
        </div>
    )
}

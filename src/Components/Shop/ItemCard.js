import "nes.css/css/nes.min.css";
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        width: '200px',
        height: '50vh',
        backgroundColor: '#fff',
        borderRadius: '50px',
        marginLeft: '8vh',
        marginTop: '15vh',
        border: '4mm ridge rgba(250, 216, 89, 1)',
        backgroundColor: 'white',
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: '15px 0',
    },
    img:{
        width: '100px',
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    iconsContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    separator:{
        margin:"0px 10px"
    },
    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        margin:"10px 0px"
    },
}))



export default function ItemCard(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.card}>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={props.img}></img>
            </div>
            <div className={classes.textContainer}>
                <h2>Excalibur</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={classes.iconsContainer}>
                <i class="nes-icon is-small heart"></i>
                <i class="nes-icon is-small heart"></i>
                <i class="nes-icon is-small heart"></i>
                <p className={classes.separator}> | </p>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small is-transparent  star"></i>
            </div>
            <div className={classes.buttonContainer}>
            <button type="button" class="nes-btn is-primary">Add to my card</button>
            </div>

        </div>
    )
}

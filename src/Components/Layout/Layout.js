import React from 'react';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './SideBar'
import background from '../../Medias/plankTexture.png'
import ShopContainer from '../../Components/Shop/ShopContainer'
export default function Layout() {

    const useStyles = makeStyles((theme) => ({
        root: {
        display: 'flex',
        
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
        flexGrow: 1,
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        height: '100%'
        },
        
    }));
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <SideBar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />

                    <Switch>
                        <Route exact path='/:sort' component={ShopContainer}/> 
                    </Switch>
               
            </main>
        </div>
    )
}

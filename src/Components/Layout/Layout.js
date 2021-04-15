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
        height: '100vh'
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
                        <Route exact path='/' component={ShopContainer}/> 
                        {/* <Route exact path='/building' component={Buildings}/>
                        <Route exact path='/building/:id' component={BuildingDetails}/>
                        <Route exact path='/union/:id' component={UnionDetails}/>
                        <Route exact path='/invoices/' component={Invoices}/>
                        <Route exact path='/payment/:id' component={Payment}/>
                        <Route exact path='/invoice/:id' component={Invoice}/>
                        <Route exact path='/products/' component={Products}/>
                        <Route exact path='/allUnions/' component={AllUnions}/>
                        <Route exact path='/allBuildings/' component={AllBuildings}/>
                        <Route exact path='/allUnpaidInvoices/' component={AllUnpaidInvoices}/>
                        <Route exact path='/paymentExport' component={ExportPayment}/>
                        <Route exact path='/comptaExport' component={ExportCompta}/> */}
                    </Switch>
               
            </main>
        </div>
    )
}

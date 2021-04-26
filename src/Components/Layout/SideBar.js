import React from "react";
import { Link } from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import background from '../../Medias/woodlogTexturerotated.jpg'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ControlPointRoundedIcon from "@material-ui/icons/ControlPointRounded";
 import ArchiveRoundedIcon from "@material-ui/icons/ArchiveRounded";
import EuroSymbolRoundedIcon from "@material-ui/icons/EuroSymbolRounded";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { PreferenceContext } from "../../Contexts/PreferenceContext";
import { CardContext } from "../../Contexts/CardContext"
import HouseIcon from '@material-ui/icons/House';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '300px 200px'
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '300px 200px'
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  itemText: {
    color: '#fff'
  }
}));

export default function MiniDrawer() {

////////////////////////////////////////////////////Variables/////////////////////////////////////////////////////////////////

  const classes = useStyles();
  const { preferenceDispatch } = React.useContext(PreferenceContext);
  const { preferenceState } = React.useContext(PreferenceContext);
  const [open, setOpen] = React.useState();
 
////////////////////////////////////////////////////Fonctions/////////////////////////////////////////////////////////////////  

  function ChangeOpenValue() {
    preferenceDispatch({ type: "toggleDrawer", payload: false });
  }

  function handleOpenModal(label) {
    console.log(label);
  }

  function sideBarItem(path, icon, label, addon) {
    return (
      <MenuItem component={Link} to={"/" + path}>
        <ListItemIcon style={{color: '#fff'}}>{icon}</ListItemIcon>
        <ListItemText className={classes.itemText} primary={label} />
        {addon ? (
          <ControlPointRoundedIcon onClick={handleOpenModal(label)} />
        ) : null}
      </MenuItem>
    );
  }

////////////////////////////////////////////////////Hooks/////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    setOpen(preferenceState.selectedPreference);
  }, [preferenceState.selectedPreference]);

////////////////////////////////////////////////////Render/////////////////////////////////////////////////////////////////

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={ChangeOpenValue} style={{color: '#fff'}}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList style={{marginTop: '100px', marginLeft: '5px', padding:'2px'}}>
          {sideBarItem("all", <AccountBalanceIcon/>, "All", false)}
          {sideBarItem("rings", <AccountBalanceIcon/>, "Rings", false)}
          {sideBarItem("swords", <AccountBalanceIcon/>, "Swords", false)}
          {sideBarItem("armors", <AccountBalanceIcon/>, "Armors", false)}
          {sideBarItem("pets", <AccountBalanceIcon/>, "Pets", false)}
        </MenuList>
      </Drawer>
    </>
  );
}
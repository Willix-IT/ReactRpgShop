import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Shop from '../../Medias/shop.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import "nes.css/css/nes.min.css";
import background from '../../Medias/woodlogTexture.jpg'

import {PreferenceContext} from '../../Contexts/PreferenceContext'


const drawerWidth = 240;





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    color: "#fff"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    margin:'auto'
  },
  button: {
    backgroundColor: "#F8F9FC",
    color: '#3f51b5',
    "&:hover": {
        backgroundColor: "#3f51b5",
        color:'#fff'
    }}
  
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


export default function MiniDrawer() {

  ////////////////////////////////////////////////////Variables/////////////////////////////////////////////////////////////////

  const classes = useStyles();
  const { preferenceDispatch } = React.useContext(PreferenceContext);
  const { preferenceState } = React.useContext(PreferenceContext);
  const [ open, setOpen ] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

////////////////////////////////////////////////////Fonctions/////////////////////////////////////////////////////////////////

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem('authState');
    setAnchorEl(null);
    window.location.reload();
  }

  function ChangeOpenValue() {
    preferenceDispatch({type:'toggleDrawer', payload:true});
  }

////////////////////////////////////////////////////Hooks/////////////////////////////////////////////////////////////////

  React.useEffect( ()=> {
       setOpen(preferenceState.selectedPreference);
  }, [preferenceState.selectedPreference])

////////////////////////////////////////////////////Render/////////////////////////////////////////////////////////////////

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={ChangeOpenValue}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
              <img src={Shop}></img>
          </div>
          <div>
    </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
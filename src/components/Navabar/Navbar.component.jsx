import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppContext } from '../../utils/AppContext.provider';
import LoginModal from '../Modals/Login/Login.modal';
import Switch from '../Switch';
import { useStyles } from './Navbar.styled';

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { state, setSearch, setDarkMode, removeSessionData } = useContext(AppContext);
  const { search, darkMode, logged, sessionData } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState(search);
  const [openModal, setOpenModal] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const reloadPage = () => {
    history.push('/');
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSession = () => {
    handleClickOpen();
    setAnchorEl(null);
  };
  const handleLogout = () => {
    removeSessionData();
    setAnchorEl(null);
  };
  const handleGoToFavVideos = () => {
    history.push('/favorites');
  };
  const handleSwitch = () => {
    setDarkMode();
  };
  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputKeyPress = (e) => {
    if (e.charCode === 13) {
      setSearch(inputValue);
      reloadPage();
    }
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {logged ? (
        <div>
          <MenuItem classes={{ root: classes.userMenu }}>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
              <ListItemText
                primary={sessionData.username}
                classes={{ root: classes.menuItemText }}
              />
            </ListItemIcon>
          </MenuItem>
          <MenuItem classes={{ root: classes.userMenu }} onClick={handleGoToFavVideos}>
            <ListItemIcon>
              <FavoriteIcon fontSize="small" />
              <ListItemText
                primary="Favorite Videos"
                classes={{ root: classes.menuItemText }}
              />
            </ListItemIcon>
          </MenuItem>
          <Divider />
          <MenuItem classes={{ root: classes.userMenu }} onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
              <ListItemText primary="Logout" classes={{ root: classes.menuItemText }} />
            </ListItemIcon>
          </MenuItem>
        </div>
      ) : (
        <MenuItem classes={{ root: classes.userMenu }} onClick={handleSession}>
          Login
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchInput}
              value={inputValue}
              onKeyPress={handleInputKeyPress}
            />
          </div>
          <div className={classes.space} />

          <div className={classes.sectionDesktop}>
            <Switch
              switchColor="white"
              label="Dark Mode"
              checkedColor="#b0a2da"
              toggleSwitch={handleSwitch}
              checked={darkMode}
            />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              data-testid="account-login-menu"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <LoginModal open={openModal} handleClose={handleClose} />
      {renderMenu}
    </div>
  );
};
export default Navbar;

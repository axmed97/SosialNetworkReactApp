import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProfileAvatar from './ProfileAvatar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auhtLogout, authLogout } from '../redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const { user } = useSelector(x => x.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    const token = localStorage.getItem("token");
    if(token != null){
      localStorage.removeItem("token");
      dispatch(authLogout());
      navigate('/');
    }
  }


useEffect(() =>{
},[user])

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ProfileAvatar />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

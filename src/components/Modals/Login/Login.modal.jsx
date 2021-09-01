import React, { useState, useContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import loginApi from '../../../utils/apis/login.api';
import { AppContext } from '../../../utils/AppContext.provider';

const LoginModal = (props) => {
  const { open, handleClose } = props;
  const [errorSession, setErrorSession] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setSessionData } = useContext(AppContext);
  const handleLocalClose = () => {
    setErrorSession(false);
    handleClose();
  };
  const handleSubmitSession = () => {
    const loginResult = loginApi(username, password);
    loginResult
      .then((data) => {
        setErrorSession(false);
        setSessionData(data.id, data.username);
        handleClose();
      })
      .catch(() => {
        setErrorSession(true);
      });
  };
  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      {errorSession && <Alert severity="error">Username or password invalid</Alert>}
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Username"
          fullWidth
          onChange={handleChangeUsername}
        />
        <TextField
          margin="dense"
          id="password-input"
          label="Password"
          type="password"
          fullWidth
          onChange={handleChangePassword}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLocalClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmitSession} color="primary" data-testid="login-btn">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;

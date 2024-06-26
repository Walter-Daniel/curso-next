import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';
import React from 'react';

type NotificationProps = {
    open: boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const NotificationComponent: React.FC<NotificationProps> = ({open, msg, severity, handleClose}) => {
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              autoHideDuration={3500} 
              open={open}
              onClose={handleClose}
              >
        <Alert onClose={handleClose} severity={severity}>
            <Typography>{msg}</Typography>
        </Alert>
    </Snackbar>
  )
}

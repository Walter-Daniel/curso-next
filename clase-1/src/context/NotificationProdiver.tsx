import { FC, createContext, useContext, useState } from 'react';
import { AlertColor } from '@mui/material';
import { NotificationComponent } from '../components/contact/NotificationComponent';

type ContextProps = {
    getError : (msg:string) => void;
    getSuccess: (msg:string) => void;
};

export const NotificationContext = createContext<ContextProps | null>(null);

export const NotificationProvider: FC<{ children : JSX.Element }> = ({ children }) => {

    const handleClose = () => {
        setOpen(false);
    }

    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor | undefined >(undefined)

    const getError = (msg:string) => {
        setSeverity("error")
        setOpen(true)
        setMsg(msg)
    };

    const getSuccess = (msg:string) => {
        setSeverity("success")
        setOpen(true)
        setMsg(msg)
    };

    const value = {
        getError,
        getSuccess
    };

    return(
        <NotificationContext.Provider  value={value}>
            <NotificationComponent handleClose={handleClose} open={open} severity={severity} msg={msg} />
            { children }  
        </NotificationContext.Provider>
    );
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if(!context) throw new Error('No existe Contexto')
    return context
}
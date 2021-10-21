import   React, { createContext, useCallback, useContext, useState } from 'react';
import { ToastMessageProps }                                         from '../interfaces';
import   ToastContainer                                              from './../components/ToastContainer';
import { v4 as uuid }                                                from 'uuid';

interface ToastContextData{
    addToast(message:Omit<ToastMessageProps,'id'>):void;
    removeToast(id:string):void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider:React.FC = ({children}) => {
    const [ messages, setMessages ] = useState<ToastMessageProps[]>([] as ToastMessageProps[] )
    
    const addToast = useCallback( ({description,icon,title,type}:Omit<ToastMessageProps,'id'>) =>{
        const id    = uuid();
        const toast = { id, description, icon, title, type }
        setMessages( oldMessages => [...oldMessages,toast] )
    },[])

    const removeToast = useCallback( id => setMessages(oldMessages => oldMessages.filter( message => message.id !== id)),[])

    return (
        <ToastContext.Provider value={{addToast,removeToast}}>
            {children}
            <ToastContainer messages={messages}/>
        </ToastContext.Provider>
    )
}

export function useToast():ToastContextData{
    const context = useContext(ToastContext)
    if(!context){
        throw new Error('useToast must be used within an ToastProvider')
    }
    return context;
}
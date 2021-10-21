import   React, { useEffect } from 'react';
import { BiError, BiX }       from 'react-icons/bi';
import { FaBoxOpen, FaUsers } from 'react-icons/fa';
import { useToast }           from '../../../hooks/toast';
import { ToastMessageProps }  from '../../../interfaces';
import { MdAssignment }       from 'react-icons/md';
import { GiOpenFolder, 
         GiReceiveMoney, 
         GiTakeMyMoney 
       } from 'react-icons/gi';
import { Body,
         Container,
         Description,
         Title  
       } from './style';

interface ToastProps{
    message:ToastMessageProps;
    style:object;
}

const icons:any = {
    sales:       <GiReceiveMoney size={"2.5rem"} color="#767676" />,
    categories:  <GiOpenFolder   size={"2.5rem"} color="#767676" />,
    clients:     <FaUsers        size={"2.5rem"} color="#767676" />,
    products:    <FaBoxOpen      size={"2.5rem"} color="#767676" />,
    expenses:    <GiTakeMyMoney  size={"2.5rem"} color="#767676" />,
    alert:       <BiError        size={"2.5rem"} color="#767676" />,
    departments: <MdAssignment   size={"2.5rem"} color="#767676" />
}

const Toast: React.FC<ToastProps> = ({message,style}) => {
    const { removeToast } = useToast()

    useEffect(()=>{
        const timer = setTimeout(()=>removeToast(message.id),5000)
        return () => clearTimeout(timer)
    },[message])

    return (
        <Container style={style}>
            {icons[message.icon]}
            <Body>
                <Title type={message.type}>{message.title}</Title>
                <Description>{message.description}</Description>
            </Body>
            <BiX onClick={() => removeToast(message.id)} style={{ cursor: "pointer" }} size={"1.875rem"} color="#D3D9DB" />
        </Container>
    )
}

export default Toast;
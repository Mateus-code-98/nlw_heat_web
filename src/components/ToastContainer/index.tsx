import   React               from 'react';
import { ToastMessageProps } from '../../interfaces';
import   Toast               from './Toast'
import { Container }         from './style';
import { useTransition }     from 'react-spring';

interface ToastContainerProps{
    messages:ToastMessageProps[];
}

const ToastContainer:React.FC<ToastContainerProps> = ({messages}) => {
    const messagesWithTransitions = useTransition(
        messages,
        {
            from:{right:'-120%'},
            enter:{right:'0%'},
            leave:{right:'-120%'}
        }
    )
    return(
        <Container>
            {messagesWithTransitions( (style,item) => (
                <Toast key={item.id} style={style} message={item}/>
            ))}
        </Container>
    )
}

export default ToastContainer;
import   styled, { css } from "styled-components";
import { animated }      from 'react-spring'

interface TitleProps{
    type:'error' | 'success' | 'info';
}

export const Container = styled(animated.div)`
    width: 22.5rem;
    position: relative;
    padding: 1rem;
    border-radius:0.625rem;
    box-shadow:0.125rem 0.125rem 0.5rem rgba(0,0,0,0.7);
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & + div{
        margin-top: 0.625rem;
    }
`

export const Body = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:1.25rem;
    margin-right:1.25rem;
    width:100%;
`

export const Title = styled.div<TitleProps>`
    ${props => props.type === 'error' && css`
        color:#E45F5E;
    `}
    ${props => props.type === 'success' && css`
        color:#4BB781;
    `}
    font-size:1rem;
    font-family: "Sahitya-Bold";
`

export const Description = styled.div`
    color:#767676;
    font-size:0.875rem;
    font-family: "Sahitya-Bold";
`
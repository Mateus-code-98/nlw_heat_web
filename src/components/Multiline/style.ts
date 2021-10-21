import   styled, { css }      from "styled-components";
import { InputBase as Input } from '@material-ui/core';
import { BiErrorCircle }      from "react-icons/bi";

interface LabelProps{
    isChecked:boolean;
    isFocused:boolean;
}

interface ContainerProps{
    isFocused:boolean;
}

export const Container = styled.div<ContainerProps>`
    border:0.125rem solid #C4C4C4;
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ${props => props.isFocused && css `
        border:0.125rem solid #3F51B5;
    `}
`

export const Label = styled.label<LabelProps>`
    position: absolute;
    top: 0.625rem;
    left: 0.5rem;
    font-size: 1rem;
    font-family: "Sahitya-Bold";
    color:#757575;
    padding-left: 0.3125rem;
    padding-right: 0.3125rem;
    transition: all 0.2s;
    background-color: #FFF;
    ${props => props.isChecked && css`
        font-size: 0.75rem;
        top: -0.625rem;
    `}
    ${props => props.isFocused && css `
        color: #3F51B5;
    `}
`

export const ContainerError = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
`

export const InputBase = styled(Input)`
    border-radius: 0.3125rem;
    width: 100%;
    height: 100%;
    padding-left: 0.75rem;
`   

export const IconError = styled(BiErrorCircle)`
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    padding-top: 0.625rem;
`

export const TooltipError = styled.span`
    display:flex;
    position:absolute;
    left:50%;
    color:#FFF;
    transform:translatex(-50%);
    bottom:calc(100% + 0.375rem);
    background:#32416B;
    padding:0.625rem;
    font-size: 0.875rem;
    border-radius:0.3125rem;
    white-space: nowrap;
    ::before{
        border-style:solid;
        border-color: #32416B transparent;
        border-width: 0.375rem 0.375rem 0 0.375rem;
        bottom:-0.3125rem;
        content: "";
        left:50%;
        transform:translatex(-50%);
        position: absolute;
    }
    box-shadow:0.125rem 0.125rem 0.5rem rgba(0,0,0,0.7);
    z-index: 999;
`
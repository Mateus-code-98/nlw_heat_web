import { animated } from "@react-spring/web";
import styled from "styled-components";
import Background from './../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    padding-left: 11.42vw;
    position: relative;
    padding-right: 11.42vw;
`

export const ContainerSide = styled(animated.div)`
    position: absolute;
    display: flex;
    height: 100%;
    background-image: url(${Background}) ;
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    width: 27.57vw;
    right: 0;
`
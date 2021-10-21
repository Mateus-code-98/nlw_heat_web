import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useCallback, useEffect, useState } from "react"
import { Formulario } from "../../components/Formulario";
import { useAuth } from "../../hooks/auth";
import LogoDoWhile from './../../assets/logo.svg';
import { Login } from "./../../components/Login";
import { messageProps, Messages } from "./../../components/Messages";
import { api } from "./../../services/api";
import { Container, ContainerSide } from "./style";
import io from 'socket.io-client';

const socket = io(`${process.env.REACT_APP_API}`)

export const Home: React.FC = () => {
    const [messages, setMessages] = useState<messageProps[]>([] as messageProps[])
    const { signIn, user } = useAuth()

    const search3Messages = useCallback(async () => {
        const resu = await api.get("/messages/last3")
        setMessages(resu.data as messageProps[])
    }, [])

    useEffect(() => {
        socket.on("new_message", data => console.log(data))
        const url = window.location.href
        const hasGithubCode = url.includes('?code=')
        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')
            window.history.pushState({}, '', urlWithoutCode)
            if (githubCode && !user) signIn({ code: githubCode })
        }
        search3Messages()
    }, [user])

    const transitions = useTransition((!!user) ? 0 : 1, {
        keys: null,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 },
    })

    return (
        <Container>

            <div style={{ display: "flex", flexDirection: "column", width: "48.14vw", minWidth: 440, padding: 20 }}>
                <div>
                    <img src={LogoDoWhile} />
                </div>
                <Messages messages={messages} />
            </div>
            {transitions((style, i) => {
                if (!i) return (
                    <ContainerSide style={{ ...style }}>
                        <div style={{ position: "relative" }}>
                            <Formulario />
                        </div>
                    </ContainerSide>
                )
                else return (
                    <animated.div style={{ ...style, display: "flex", width: "32.5vw", minWidth: 400 }}>
                        <Login />
                    </animated.div>
                )
            })}



            {/* {transitions((style, i) => {
                if (!i) return (
                    <animated.div style={{ ...style, position: "absolute", width: "calc(100% - 11.42vw)", height: "100%" }}>
                        <div style={{ display: "flex", width: "100%", height: "100%" }}>
                            <div style={{ display: "flex", flexDirection: "column", width: "48.14vw", minWidth: 440, padding: 20 }}>
                                <div>
                                    <img src={LogoDoWhile} />
                                </div>
                                <Messages messages={messages} />
                            </div>
                            <ContainerSide>
                                <div style={{ position: "relative" }}>
                                    <Formulario />
                                </div>
                            </ContainerSide>
                        </div>
                    </animated.div>
                )
                else return (
                    <animated.div style={{ ...style, position: "absolute", display: "flex", flexDirection: "row", width: "calc(100% - 11.42vw)", height: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "48.14vw", minWidth: 440, padding: 20 }}>
                            <div>
                                <img src={LogoDoWhile} />
                            </div>
                            <Messages messages={messages} />
                        </div>
                        <div style={{ display: "flex", width: "32.5vw", minWidth: 400 }}>
                            <Login />
                        </div>
                    </animated.div>
                )
            })} */}
        </Container >
    )
}
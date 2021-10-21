import { InputBase } from '@material-ui/core';
import React, { useCallback, useRef } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { useAuth } from '../../hooks/auth';
import InputMultiline, { InputRefProps } from './../Multiline/index';
import { ContainerInputMultiline } from './style';

export const Formulario: React.FC = () => {
    const { signOut } = useAuth()
    const inputMultilineRef = useRef<HTMLDivElement>(null)

    const getInputValue = useCallback(() => {
        return inputMultilineRef.current?.getElementsByTagName('textarea')[0].value ? inputMultilineRef.current?.getElementsByTagName('textarea')[0].value : ""
    }, [inputMultilineRef])

    const submit = useCallback(async (event) => {
        event.preventDefault()
        const text = getInputValue()
        console.log(text)
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", position: "absolute", minWidth: "32.36vw", background: "#1B1B1F", padding: 20, left: "50%", top: "50%", transform: "translatex(-50%) translatey(-50%)" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
                <BiLogOut onClick={signOut} style={{ cursor: "pointer" }} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ padding: 2, background: "linear-gradient(100deg,#FF008E 0% ,#FFCD1E 100%)", borderRadius: "50%", lineHeight: 0 }}>
                            <img style={{ width: 84, height: 84, borderRadius: "50%", border: "4px solid #121214" }} src={"https://avatars.githubusercontent.com/u/69534525?v=4"} alt={"Eu"} />
                        </div>
                    </div>
                    <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, margin: 10 }}>Mateus Brasil dos Santos</p>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", fontSize: 14 }}>
                        <FaGithub style={{ marginRight: 5 }} />
                        <p>Mateus-code-98</p>
                    </div>
                </div>
                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
                    <label style={{ background: "#29292E", padding: 10 }}>Mensagem</label>
                    <ContainerInputMultiline>
                        <InputBase
                            placeholder="Qual sua expectativa para o evento?"
                            multiline
                            rows={8}
                            maxRows={8}
                            ref={inputMultilineRef}
                            style={{ color: "#8D8D99", width: "100%" }}
                        />
                        <div style={{ display: "flex", justifyContent: "flex-end", margin: 10 }}>
                            <button type="submit" style={{ padding: 10, background: "#FF008E", textDecoration: "none", border: "0px", cursor: "pointer", fontWeight: "bold", color: "#FFF" }}>ENVIAR MENSAGEM</button>
                        </div>
                    </ContainerInputMultiline>

                </form>
            </div>
        </div>
    )
}
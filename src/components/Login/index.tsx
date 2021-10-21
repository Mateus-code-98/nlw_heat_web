import React from "react";
import LoginLogo from './../../assets/banner-girl.png';
import { FaGithub } from 'react-icons/fa';
export const Login: React.FC = () => {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column" }}>
            <div style={{ display: "flex", minWidth: "100%", maxWidth: "100%" }}>
                <img style={{ minWidth: "100%", maxWidth: "100%" }} src={LoginLogo} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20, fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
                Envie e compartilhe
                sua mensagem
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", padding: 10, background: "#FFCD1E", marginTop: 20, cursor: "pointer", color: "#000", fontWeight: "bold", flexDirection: "row", alignItems: "center" }}>
                    <FaGithub style={{ marginRight: 5 }} />
                    ENTRAR COM O GITHUB
                </div>
            </div>
        </div>
    )
}
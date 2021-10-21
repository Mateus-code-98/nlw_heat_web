import React, { useEffect } from "react";
import LoginLogo from './../../assets/banner-girl.png';
import { FaGithub } from 'react-icons/fa';
import { useAuth } from "../../hooks/auth";

const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}`

export const Login: React.FC = () => {
    const { loadingSignIn } = useAuth()
    return (
        <div style={{ display: "flex", height: "100%", background: "#171719", width: "100%", flexDirection: "column" }}>
            <div style={{ display: "flex", minWidth: "100%", maxWidth: "100%" }}>
                <img style={{ minWidth: "100%", maxWidth: "100%" }} src={LoginLogo} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20, fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
                Envie e compartilhe
                sua mensagem
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <a href={signInUrl} style={{ display: "flex", fontSize: 12, cursor: "pointer", padding: 10, textDecoration: "none", background: "#FFCD1E", marginTop: 20, minWidth: 232, justifyContent: "center", color: "#09090A", fontWeight: "bold", flexDirection: "row", alignItems: "center" }}>
                    <FaGithub style={{ marginRight: 5, fontSize: 20 }} />
                    ENTRAR COM O GITHUB
                </a>
            </div>
        </div>
    )
}
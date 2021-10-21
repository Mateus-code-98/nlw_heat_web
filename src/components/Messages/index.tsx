import React from "react"

export interface messageProps {
    id: string;
    text: string;
    user: {
        id: string;
        name: string;
        avatar_url: string;
    }
}

interface MessagesComponentProps {
    messages: messageProps[];
}

export const Messages: React.FC<MessagesComponentProps> = ({ messages }) => {
    return (
        <ul style={{ display: "flex", listStyle: "none", overflowX: "auto", gap: 40, flex: 1, justifyContent: "center", flexDirection: "column" }}>
            {messages.map((message, index) => (
                <li style={{ maxWidth: 440, marginLeft: index === 1 ? 80 : 0 }}>
                    <p style={{ fontSize: 20 }}>{message.text}</p>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
                        <div style={{ padding: 2, background: "linear-gradient(100deg,#FF008E 0% ,#FFCD1E 100%)", borderRadius: "50%", lineHeight: 0 }}>
                            <img style={{ width: 30, height: 30, borderRadius: "50%", border: "4px solid #121214" }} src={message.user.avatar_url} alt={message.user.name} />
                        </div>
                        <span style={{ display: "flex", alignItems: "center", fontSize: 16, marginLeft: 12 }}>{message.user.name}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}
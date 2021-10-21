import React, { useCallback, useEffect, useState } from "react"
import LogoDoWhile from './assets/logo.svg';
import { Login } from "./components/Login";
import { messageProps, Messages } from "./components/Messages";
import { Container } from "./style";
import { api } from './services/api';

export const App: React.FC = () => {
  const [messages, setMessages] = useState<messageProps[]>([] as messageProps[])

  const search3Messages = useCallback(async () => {
    const resu = await api.get("/messages/last3")
    setMessages(resu.data)
  }, [])

  useEffect(() => {
    search3Messages()
  })
  return (
    <Container>

      <div style={{ display: "flex", flexDirection: "column", width: "48.14vw", minWidth: 440, padding: 20 }}>
        <div>
          <img src={LogoDoWhile} />
        </div>
        <Messages messages={messages} />
      </div>
      <div style={{ display: "flex", width: "32.5vw", minWidth: 400 }}>
        <Login />
      </div>

    </Container>
  )
}
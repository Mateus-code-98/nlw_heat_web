import React, { useCallback, useEffect, useState } from "react"
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
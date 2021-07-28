import React from 'react'
import { Switch, Route } from 'react-router'
import '../App.css'
import App from '../App'
import Menu from '../components/Menu'
import Chat from '../components/Chat'
import NotFound from '../components/NotFound'

export default function Router() {
    return (
        <div>
            <Menu />
            <Switch>
                <Route path="/" exact />

                <Route exact path="/chats" component={App} />

                <Route path="/chats/:chatId" render={() => <Chat />} />

                <Route path="/profile">
                    <p>Profile page</p>
                </Route>

                <Route path="/404" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
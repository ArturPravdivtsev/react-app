import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import '../App.css'
import App from '../App'
import Menu from '../components/Menu'
import Chat from '../components/Chat'
import Chats from '../components/Chats'
import Profile from '../components/Profile'
import News from '../components/News'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)
    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router() {
    return (
        <div>
            <Menu />
            <Switch>
                <Route path="/" exact component={App} />

                <PrivateRoute exact path="/chats" component={Chats} />

                <PrivateRoute path="/chats/:chatId" component={Chat} />

                <PrivateRoute path="/profile" component={Profile} />

                <Route path="/login" component={Login} />

                <Route path="/news" component={News} />

                <Route path="/404" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
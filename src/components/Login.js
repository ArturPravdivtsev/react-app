import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button';

export default function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isSigningUp, setIsSigningUp] = React.useState(false)

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked)

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSignUp = async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSubmit = () => {
        if (!email || !password) {
            setError('Заполните поля')
            return
        }
        if (isSigningUp) {
            handleSignUp()
            return
        }
        handleLogin()
    }

    return (
        <div className="auth_wrapper">
            <p>{isSigningUp ? 'Sign up' : 'Login'}</p>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isSigningUp}
                        onChange={handleIsSigningUpChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p>Еще нет учетной записи?</p>}
            />
            <TextField
                className="child__text-field"
                variant="outlined"
                placeholder="Email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
            />
            <TextField
                className="child__text-field"
                variant="outlined"
                placeholder="Password"
                value={password}
                type="text"
                onChange={handleChangePassword}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                {isSigningUp ? 'Sign up' : 'Login'}
            </Button>

            <hr />
            <p>{error}</p>
        </div>
    )
}
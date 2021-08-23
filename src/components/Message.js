import PropTypes from 'prop-types'
import React from 'react'
import { AUTHORS } from '../constants'

function Message(props) {
    const { id, author, text } = props

    return (
        <li key={id} className={author === AUTHORS.BOT ? 'robot' : 'author'}>{author}: {text}</li>
    )
}

Message.propTypes = {
    nick: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
Message.defaultProps = {}

export default Message
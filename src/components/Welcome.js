import React from 'react'

export default function child(props) {

    return (
        <div>
            <h1>Hey {props.name}!</h1>
            <h2>Welcome to School.</h2>
        </div>
    )
}
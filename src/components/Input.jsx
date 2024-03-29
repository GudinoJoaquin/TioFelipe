import React from 'react'
import ReactDOM from 'react-dom/client'

function Input({type, placeholder, name}){
    return (
        <input type={type} placeholder={placeholder} name={name} />
    )
}

export default Input;

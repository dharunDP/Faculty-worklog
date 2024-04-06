import React from 'react'
import './inputbox.css'

export default function InputBox(props) {
    return (
        <div>
            <input
                className='inputbox'
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />  
        </div>
    )
}
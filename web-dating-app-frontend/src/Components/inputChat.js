import React from 'react'
import { useState } from 'react';
import '../css/inputChat.css'

const InputChat = () => {

    const [textarea, setTextArea] = useState(null);

    return (
        <div className='input_chat'>
            <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} />
            <button className='input_Button'>Submit</button>
        </div>
    )
}

export default InputChat
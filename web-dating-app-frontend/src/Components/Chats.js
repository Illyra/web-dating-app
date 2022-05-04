import React from 'react';
import '../css/Chats.css';
import DisplayMatch from '../Components/displayMatch';
import DisplayMessage from '../Components/displayMessage';
import Message from '../Components/Message';

function Chats({ User }) {
    return (
        <div className='Chat'>
            <Message />

            <div>
                <button className='Option'>Matches</button>
                <button className='Option'>Chat</button>
            </div>

            <DisplayMatch />

            <DisplayMessage />
        </div>
    );
}



export default Chats;
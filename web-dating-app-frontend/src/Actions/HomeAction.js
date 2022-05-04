import React from 'react'
import '../css/HomeAction.css'

const HomeAction = ({ minimal, setAuthAction, authAct, setSignUp }) => {

    const handleClicker = () => {
        setAuthAction(true);
        setSignUp(false);
    };

    const authToken = true;

    return (
        <div className='Header_Home'>
            <img className='HeaderLogo'
                src={minimal ? 'Bonjour-Logos_black.png' : 'Bonjour-Logos_transparent.png'}
                alt="Logo"
            />

            {!authToken && !minimal && <button
                className = 'Login_Button'
                onClick = {handleClicker}
                disabled = {authAct}>
                Log In
            </button>}
        </div>
    )
}

export default HomeAction
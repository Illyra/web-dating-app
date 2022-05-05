import React from 'react'
import '../css/AuthActions.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const AuthActions = ({ setAuthAction, SignUp }) => {
    const [Password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [err, seterr] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    let navigate = useNavigate();
    const handleClicker = () => {
        setAuthAction(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (SignUp && (Password !== confirmPassword)) {
                seterr('Passwords do not match!');
                return
            }
            const response = await axios.post('http://localhost:8080/signup', { email, Password})
            
            if (response.status === 201){
                navigate.push('/Details')
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    console.log(email, Password, confirmPassword);

    return (
        <div className='Auth_Actions'>
            <div className='Closing_Overlay' onClick={handleClicker}>ⓧ</div>
            <h2>{SignUp ? 'Create Account' : 'Log In'} </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='Email'
                    id='Email'
                    name='Email'
                    placeholder='Email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='Password'
                    id='Password'
                    name='Password'
                    placeholder='Password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {SignUp && <input
                    type='Confirm Password'
                    id='Confirm Password'
                    name='Confirm Password'
                    placeholder='Confirm Password'
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}

                <input className='Submit_Button' type='Submit' />
                <p>{err}</p>
            </form>
        </div>
    )
}

export default AuthActions
import HomeAction from "../Actions/HomeAction";
import '../css/Home.css'
import AuthActions from '../Actions/AuthActions'
import { useState } from "react";

const Home = () => {
    const [authAct, setAuthAction] = useState(false);
    const [SignUp, setSignUp] = useState(true);
    const authToken = false

    const handleClicker = () => {
        console.log('clicking...');
        setAuthAction(true);
        setSignUp(true);
    }

    return (
        <div className="Home_Overlay">
            <HomeAction minimal={false} authToken={authToken}
                setAuthAction={setAuthAction}
                authAct={authAct}
                setSignUp={setSignUp} />
            <div className="Home">
                <h2 className="Hello_Word">Hello!</h2>
                <button className="Home_Button" onClick={handleClicker}>
                    {authToken ? 'Sign Out' : 'Create Account'}
                </button>

                {authAct && (<AuthActions
                    setAuthAction={setAuthAction}
                    setSignUp={setSignUp}
                    SignUp={SignUp} />)}

            </div>
        </div>
    )
}

export default Home
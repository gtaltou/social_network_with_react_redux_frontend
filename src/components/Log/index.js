import React, { useState } from 'react'
import SingUpForm from './SingUpForm';
import SingInForm from './SingInForm'

const Log = (props) => {
    const [singUpModal, setSignUpModal] = useState(props.signup);
    const [singInModal, setSignInModal] = useState(props.signin);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        }
        else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }

    };
    return (
        <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModals} id="register"
                        className={SingUpForm ? "active-btn" : null}>S'inscrire</li>
                    <li onClick={handleModals} id="login"
                        className={SingInForm ? "active-btn" : null}>Se connecter</li>
                    {singUpModal && <SingUpForm />}
                    {singInModal && <SingInForm />}
                </ul>
            </div>

        </div>
    );
};

export default Log;
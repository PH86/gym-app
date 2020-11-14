import React, { useState } from 'react'
import LogIn from '../LogIn';
import PageHeroSection from '../PageHeroSection';
import Img from '../Images/img-member.jpg';

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signedUp, setSignedUp] = useState(false)
    const [logIn, setLogIn] = useState(false)
    // Make handle submit set a state which will hide the form and say welcome
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignedUp(true)
    }

    const handleClick = () => {
        setLogIn(!logIn)
    }

    return (<>

        <PageHeroSection
            src={Img}
            pageName="Become a member"
            pageDesc="Only you can change your life. No one can do it for you."
        />

        <div className="login-container">
            {!logIn && <div>
                <h2>Already a member?</h2>
                <button type="button" className="btns" onClick={handleClick}>
                    Log In
                </button>
                {!signedUp && <article>
                    <form className="form" onSubmit={handleSubmit}>
                        <h2>Become a member</h2>
                        <div className="form-control">

                            <label htmlFor="firstName"></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">

                            <label htmlFor="lastName"></label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Surname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">

                            <label htmlFor="email"></label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btns">Join</button>

                    </form>
                </article>}
                {signedUp && <h1>Welcome {firstName} a confirmation email has been sent to {email}</h1>}
            </div>
            }
            {logIn && <div>
                <h2>New member?</h2>
                <button type="button" className="btns" onClick={handleClick}>
Join
</button>
                <LogIn /> 
                </div>}

        </div>
    </>

    );
}

export default SignUp;



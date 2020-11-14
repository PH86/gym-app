import React, { useState } from 'react';
import './LogIn.css';

function LogIn() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
// Make handle submit set a state which will hide the form and say welcome
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoggedIn(true)
    }

    return (
        <> 
            <div className="login-container">

                {!loggedIn && <article>
                    <form className="form" onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                        <div className="form-control">
                            
                            <label htmlFor="userName"></label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="Enter User Name"
                                value={userName} 
                                onChange={(e) => setUserName(e.target.value)}
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
                        <button type="submit" className="btns">Log In</button>
                       
                    </form>
                </article>}
                {loggedIn && <h1>Welcome {userName} you are now logged in</h1>}
            </div>
        </>
    );
}

export default LogIn

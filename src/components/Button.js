import React from 'react';
import './Button.css';
import { NavLink } from "react-router-dom";

function Button({user, setUser}){

    function handleLogoutClick(){
        fetch("httpp://localhost:3000/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <>
        <div>
            {user ? (
            <button onClick={handleLogoutClick} className="button3">Logout</button>
            ) : (
                <>
                <div id="sign-login"> 
                    <NavLink to="/signup">Signup  / </NavLink>   
                    <NavLink to="/login"> Login</NavLink>
                </div>
                </>
            )}
        </div>
        </>
    )
};

export default Button;
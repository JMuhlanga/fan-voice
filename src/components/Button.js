import React from 'react';
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
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Signup  / </NavLink> 
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login"> Login</NavLink>
                    </li>                 
                </>
            )}
        </div>
        </>
    )
};

export default Button;
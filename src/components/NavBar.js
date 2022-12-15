import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import Button from './Button';

function NavBar({user, setUser}){
    const [button, setButton] = useState(true);

    function showButton (){
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton();
    }, []);
    
    window.addEventListener("resize", showButton);

    return(
        <>
            <nav className="navbar navbar-expand-lg  fixed-top mask-custom shadow-0">
                <div className="container">
                    
                    <NavLink className="navbar-brand" to="/" >FAN-VOICE-KE</NavLink>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">                  
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sports">Sports</NavLink>
                            </li>                    
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/popculture">Pop-Culture</NavLink>
                            </li>                    
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/gaming">Gaming</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About-Us</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact-Us</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/write">Write</NavLink>
                            </li>                   
                                                
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Log-in</NavLink>
                            </li>
                            {<Button user={user} setUser={setUser}/>}
                            
                        </ul>
                    </div>         
                                    
                </div>
            </nav>
        </>
    )
}

export default NavBar;
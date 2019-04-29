import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{

        if(isSignedIn){
            return(
                <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={() => onRouteChange('event')} 
                className='f3 link dim black underline pa3 pointer'>Create Event</p>
                <p onClick={() => onRouteChange('logout')} 
                className='f3 link dim black underline pa3 pointer'>Log Out</p>
            </nav> 
            )
        }
        else{
            return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('login')} 
            className='f3 link dim black underline pa3 pointer'>Log In</p>
            <p onClick={() => onRouteChange('register')} 
            className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
            )
        
        }
        
   
}

export default Navigation;
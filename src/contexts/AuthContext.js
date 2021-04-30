
import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [email, setEmail]=useState('');
    const [isauth, setIsAuth]=useState(false);
    
    const authenticate = () =>{
        console.log("authenticate")
        setEmail("maria@gmail.com")
        setIsAuth(true);
        
    }

    return(
        <AuthContext.Provider  value={{ isauth:isauth, email:email, authenticate:authenticate }}>
            {props.children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;
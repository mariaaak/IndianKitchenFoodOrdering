import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

const ProtectedRoutes = (props) => {

    let history = useHistory();
    let Cmp = props.Cmp
    
    useEffect(()=>{
        if(!localStorage.getItem('admin-info')){
            history.push("/signin")
        }
    },[])
    return(
        <div>
            <Cmp />
        </div>
    )
}

export default ProtectedRoutes;
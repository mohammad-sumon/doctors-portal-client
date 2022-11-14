import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // final step
    if(loading){
        return <progress className="progress w-56"></progress>;
    };

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;

/*
1. Private route er first step ei page e
2. R second step Login.js page e
3. make <PrivateRoute><Dashboard></Dashboard></PrivateRoute> in Routes.js file.

fourth step holo, private route e jawar por page reload dile abar login page e niye jay. etake ekta loading state er moddhe set korte hobe.
4. set a [loading, setLoading] state in AuthProvider.js file

5. final step holo private route e 'loading' context take use kora.

*/
import React from 'react';

let isAuth = false;

const AuthContext = React.createContext(isAuth);

export default AuthContext;
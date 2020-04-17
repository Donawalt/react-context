import React from 'react';
import AuthContext from './Auth';


export default (children)=> (
    <AuthContext.provider value={false}>
        <button>{children}</button>
    </AuthContext.provider>
)
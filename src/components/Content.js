import React from 'react';
import AuthContext from './Auth';

export default () => (
    <AuthContext.consumer>
        {
            value => <p> value </p>
        }
    </AuthContext.consumer>
)
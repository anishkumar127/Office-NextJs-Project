import React from 'react'
import axios from 'axios'
import { clientId, clientSecret, scope, tokenEndpoint } from '../../config/secret'
const GetTokenCalls = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                tokenEndpoint,
                new URLSearchParams({
                    grant_type: 'client_credentials',
                    client_id: clientId,
                    client_secret: clientSecret,
                    scope: scope,
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            const access_token = response.data.access_token;
            console.log("access_token", access_token)

        } catch (err) {
            console.error('Error Submit', err);
        }
    }
    return (

        <div>GetTokenCalls
            <br />
            <br />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default GetTokenCalls
import { PublicClientApplication } from "@azure/msal-browser";
import { clientId, redirectURI } from "../config/secret";

const msalConfig = {
    auth: {
        clientId: clientId,
        redirectUri: redirectURI,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);

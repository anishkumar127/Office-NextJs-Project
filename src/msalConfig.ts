import {
  EventType,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser";
import { clientId, redirectURI, tokenEndpoint } from "../config/secret";

const msalConfig = {
  auth: {
    clientId: clientId,
    redirectUri: redirectURI,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

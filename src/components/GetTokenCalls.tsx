import React, { useEffect, useState } from "react";
import axios from "axios";
import { msalInstance } from "@/msalConfig";
import { msMe } from "../../config/uri";
import { scope } from "../../config/secret";
const GetTokenCalls = () => {
  const [accessToken, setAccessToken] = useState("");
  // < ----------------- IF USER ALREDY LOGGED IN - ACQUIRE A TOKEN SILENTLY. ---------------------------->
  useEffect(() => {
    const handleRedirectPromise = async () => {
      try {
        await msalInstance.handleRedirectPromise();
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
          acquireToken(accounts[0]); // already logged in
        } else {
          // if not logged in.
          try {
            const loginResponse = await msalInstance.loginPopup();
            console.log("Login successful!", loginResponse);
            setAccessToken(loginResponse.accessToken);
            console.log("HandleSubmit Token", loginResponse.accessToken);
          } catch (error) {
            console.error("Error during login:", error);
            setAccessToken("");
          }
        }
      } catch (error) {
        console.error("Error handling redirect promise:", error);
      }
    };
    handleRedirectPromise();
  }, []);
  // <------------------ ACQUIRE TOKEN SILENTY & SETTING TO STATE ---------------------------->
  const acquireToken = async (account: any) => {
    try {
      const response = await msalInstance.acquireTokenSilent({
        account: account,
        scopes: [scope],
      });
      setAccessToken(response.accessToken);
      console.log("acquireToken SILENTY", response.accessToken);
    } catch (err) {
      console.error("Error acquiring access token:", err);
      setAccessToken("");
    }
  };

  useEffect(() => {
    if (accessToken) {
      const AccessToken = accessToken;
      const headers = {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      };
      const fetchData = async () => {
        try {
          const response = await axios.get(msMe, { headers });
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Access Token: {accessToken}</h1>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default GetTokenCalls;

import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react'

function Logout() {

    const [message, setMessage] = useState("");
    const history = useHistory();

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:3300/logout", {
                method: "POST",
                credentials: "include",
            });

            if (response.ok) {
                const data = await response.json();
                document.cookie = 'jwt=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;'; //past date so the browser deletes it straight away.
                setMessage(data.message);
                history.push("/");
            } else {
                setMessage("Logout failed!");
            }
        } catch (error) {
            setMessage("Logout failed!")
        }
    }

  return (
    <div>
      <h4>Logout</h4>
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

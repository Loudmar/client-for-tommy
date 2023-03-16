import React from "react";

function Logout() {
  const handleLogout = async () => {
    // Send a GET request to the server to clear the authentication cookie
    const response = await fetch("https://dummyjson.com/auth/logout", {
      method: "GET"
    });

    if (response.ok) {
      // Clear the authentication cookie in the browser
      document.cookie =
        "token=; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/;";
    } else {
      console.log("Logout failed");
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <button type="submit">Log out</button>
    </form>
  );
}

export default Logout;
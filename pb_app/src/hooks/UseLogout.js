import PB from "lib/pocketbase";
import { useState } from "react";

function UseLogout(){
    /* Later, this will be use to re-render the Auth component */
    const [ dummy, setDummy] = useState(0);

    /**
     * DOCU: Function to clear user data
     * Triggered: This function will be triggered when user clicked the logout button
     * Last Update: April 24, 2023
     * @function
     * @memberOf UseLogout
     * @author MadriñanComputerLab
     */
    function logout(){
        /* logout() function was not an asynchronous function because it doesn't do an API call. Instead, it simply clear the cookie */
        PB.authStore.clear();
        setDummy(Math.random());
    }

    return logout;
}

export default UseLogout;
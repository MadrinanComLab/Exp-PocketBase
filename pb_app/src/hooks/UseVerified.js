import {  useState, useEffect } from "react";
import PB from "lib/pocketbase";

function UseVerified(){
    const [ is_verified, setIsVerified ] = useState(false);

    useEffect(() => {
        /**
         * DOCU: Function to check if user account is verified
         * Triggered: This function will be triggered when user login his/her account.
         * Last Update: April 30, 2023
         * @function
         * @memberOf UseVerified
         * @author MadriñanComputerLab
         */
        async function checkVerified(){
            const user_id = PB.authStore.model.id;
            const user_data = await PB.collection("users").getOne(user_id);

            console.log("Fetch data: ", user_data);
            setIsVerified(user_data.verified);
        }

        const is_logged_in = PB.authStore.isValid;

        /* Invoke checkVerified() function if the user is logged in */
        if(is_logged_in){
            checkVerified();
        }
    }, []);
    
    /**
     * DOCU: Function that will handle the sending of email verification.
     * Triggered: This function will be triggered when user click the "Send Verification" button.
     * Last Update: May 6, 2023
     * @function
     * @memberOf UseVerified
     * @author MadriñanComputerLab
     */
    async function requestVerification(){
        const email = PB.authStore.model.email;
        const response = await PB.collection("users").requestVerification(email);

        if(response){
            alert("Verification email sent! Check your inbox.");
        }
    }

    return { is_verified, requestVerification };
}

export default UseVerified;
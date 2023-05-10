import PB from "lib/pocketbase";
import { useQuery } from "react-query";

export default function UseVerified(){
    console.log("UseVerified() was invoked!");
    const user_id = PB.authStore.model?.id;

    /**
     * DOCU: Function to check if user account is verified
     * Triggered: This function will be triggered when user login his/her account.
     * Last Update: May 10, 2023
     * @function
     * @memberOf UseVerified
     * @author MadriñanComputerLab
     */
    async function checkVerified(args){
        const user_data = await PB.collection("users").getOne(user_id);
        return user_data.verified
    }

    /**
     * DOCU: Function that will handle the changes in the database.
     * Triggered: This function will be triggered when user login his/her account.
     * Last Update: May 10, 2023
     * @function
     * @memberOf UseVerified
     * @author MadriñanComputerLab
     * @param {function} queryFunction - This will be used for fetching of data necessary data when changes occur to the database.
     * @param {array} queryKey - This is used for data caching.
     */
    return useQuery({
        queryFn: checkVerified,
        queryKey: [ "check-verified", user_id ]
    });
}

/**
 * DOCU: Function that will handle the sending of email verification.
 * Triggered: This function will be triggered when user click the "Send Verification" button.
 * Last Update: May 10, 2023
 * @function
 * @memberOf UseVerified
 * @author MadriñanComputerLab
 */
export async function requestVerification(){
    const email = PB.authStore.model.email;
    const response = await PB.collection("users").requestVerification(email);

    if(response){
        alert("Verification email sent! Check your inbox.");
    }
}
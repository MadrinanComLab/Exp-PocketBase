import PB from "lib/pocketbase";
import { useMutation } from "react-query"

function UseLogin(){
    /**
     * DOCU: Function to check if user record exists in the database
     * Triggered: This function will be triggered when user clicked the login button
     * Last Update: April 24, 2023
     * @function
     * @memberOf Auth
     * @param {string} email - This is the email provided by user
     * @param {string} password - This is the password provided by user
     * @author MadriñanComputerLab
     */
    async function login({ email, password }){
        /* This function was a custom function of handleSubmit() */
        const auth_data = await PB
            .collection("users")
            .authWithPassword(email, password);
    }

    return useMutation(login)
}

export default UseLogin;
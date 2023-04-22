import PB from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Auth(){
    const { register, handleSubmit } = useForm();
    const [ is_loading, setLoading ] = useState(false);
    const is_logged_in = PB.authStore.isValid;

    /* Later, this will be use to re-render the Auth component */
    const [ dummy, setDummy] = useState(0);

    /**
     * DOCU: Function to check if user record exists in the database
     * Triggered: This function will be triggered when user clicked the login button
     * Last Update: April 23, 2023
     * @function
     * @memberOf Auth
     * @param {object} data - This is the object provided by the useForm of react-hook-form
     * @author MadriñanComputerLab
     */
    async function login(data){
        /* This function was a custom function of handleSubmit() */
        setLoading(true);

        try{
            const auth_data = await PB
                .collection("users")
                .authWithPassword(data.email, data.password);
        }
        catch(error){
            console.log(error);
        }

        setLoading(false);
    }

    /**
     * DOCU: Function to clear user data
     * Triggered: This function will be triggered when user clicked the logout button
     * Last Update: April 23, 2023
     * @function
     * @memberOf Auth
     * @author MadriñanComputerLab
     */
    function logout(){
        /* logout() function was not an asynchronous function because it doesn't do an API call. Instead, it simply clear the cookie */
        PB.authStore.clear();
        setDummy(Math.random());
    }

    if(is_logged_in){
        return (
            <>
                {/* If a user has logged in, display the email address */}
                <h1>Logged In: { is_logged_in && PB.authStore.model.email }</h1>
                <button onClick={ logout }>Log Out</button>
            </>
        );
    }

    return (
        <>
            <h1>Welcome to Login Page!</h1>
            { is_loading && <p>Loading...</p> }

            <form onSubmit={ handleSubmit(login) }>
                <input type="text" placeholder="email" {...register("email")}/>
                <input type="password" placeholder="password" {...register("password")}/>
                <button type="submit" disabled={ is_loading }>Login</button>
            </form>
        </>
    );
}

export default Auth;
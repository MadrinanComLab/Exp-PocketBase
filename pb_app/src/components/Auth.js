import UseLogin from "hooks/UseLogin";
import UseLogout from "hooks/UseLogout";
import UseVerified, { requestVerification } from "hooks/UseVerified";
import PB from "lib/pocketbase";
import { useForm } from "react-hook-form";

function Auth(){
    const logout = UseLogout();
    const { data: is_verified } = UseVerified();
    const { mutate, isLoading, isError } = UseLogin();
    const { register, handleSubmit, reset } = useForm();
    const is_logged_in = PB.authStore.isValid;

    /**
     * DOCU: Function to check if user record exists in the database
     * Triggered: This function will be triggered when user clicked the login button
     * Last Update: April 23, 2023
     * @function
     * @memberOf Auth
     * @param {object} data - This is the object provided by the useForm of react-hook-form
     * @author MadriñanComputerLab
     */
    async function onSubmit(data){
        mutate(data);
        reset();
    }

    if(is_logged_in){
        return (
            <>
                {/* If a user has logged in, display the email address */}
                <h1>Logged In: { is_logged_in && PB.authStore.model.email }</h1>
                <p>Verified: { is_verified?.toString() }</p>
                { !is_verified && <button onClick={requestVerification}>Send Verification</button> }
                <button onClick={ logout }>Log Out</button>
            </>
        );
    }

    return (
        <>
            <h1>Welcome to Login Page!</h1>
            { isLoading && <p>Loading...</p> }
            { isError && <p>Invalid email or password</p> }

            <form onSubmit={ handleSubmit(onSubmit) }>
                <input type="text" placeholder="email" {...register("email")}/>
                <input type="password" placeholder="password" {...register("password")}/>
                <button type="submit" disabled={ isLoading }>Login</button>
            </form>
        </>
    );
}

export default Auth;
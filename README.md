# Welcome to PocketBase Experiment!
<b>Reference for this experiment:</b> https://www.youtube.com/watch?v=rediFff54JA&t=75s<br/>
This experiment initiated in April 9, 2023

## Introduction to PocketBase
`PocketBase` is similar to `Firebase` (a Google service) and `Supabase` (an open-source Firebase alternative), which handles the backend function like file upload, saving data to a database, etc.<br/>

I know that my introduction to PocketBase was too short to describe it, so here is the [link](https://www.youtube.com/watch?v=Wqy3PBEglXQ) to video of Fireship where he full introduce PocketBase.<br/>

You can download `PocketBase` using the link below:<br/>
<b>•</b> https://pocketbase.io/docs

## How to Run PocketBase?
Once you've downloaded `PocketBase` and it was now in `Downloads`, do the following:<br/>
<b>1.</b> Extract the ZIP file which you downloaded.<br/>
<b>2.</b> Rename it into `PocketBase` or however you like but keep it short.<br/>
<b>3.</b> Go to that directory, ex.: `Downloads/PocketBase`.<br/>
<b>4.</b> Now enter this command:
```
./pocketbase serve
```
If the command above didn't work for you, try this:
```
pocketbase serve
```

<b><em>Note:</em></b> The `pocketbase` you see in the command is not the folder name, it was the keyword for the command.<br/><br/>
<b>5.</b> After running the previous command you will see something like this:
```javascript
2023/04/09 22:11:46 Server started at http://127.0.0.1:8090
 ➜ REST API: http://127.0.0.1:8090/api/
 ➜ Admin UI: http://127.0.0.1:8090/_/
```

## Explaining the Links
Based on the official documentation, the meaning of the links are the following:<br/>
<b>•</b> `http://127.0.0.1:8090` - if pb_public directory exists, serves the static content from it (html, css, images, etc.)<br/>
<b>•</b> `http://127.0.0.1:8090/_/` - Admin dashboard UI<br/>
<b>•</b> `http://127.0.0.1:8090/api/` - REST API<br/>

## Folders in Pre-Built PocketBase
The prebuilt PocketBase executable will automatically create and manage 2 new directories alongside the executable:<br/>
<b>•</b> `pb_data` - stores your application data, uploaded files, etc. (usually should be added in `.gitignore`).<br/>
<b>•</b> `pb_migrations` - contains JS migration files with your collection changes (can be safely committed in your repository).<br/><br/>

## User-Defined Folder
You have to add the following folder:<br/>
<b>•</b> `pb_public` - This is the folder that will be hosted by PocketBase. Here is an example:<br/>
<b>1.</b> After creating the `pb_public`, create a file inside this folder named `index.html` and copy paste the following code:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testing123</title>
    </head>
    <body>
       <h1>Welcome to PocketBase Experiment by MadriñanComLab!</h1> 
    </body>
</html>
```
<b>2.</b> Then go to this URL:
```
http://127.0.0.1:8090/
``` 

## Adding React Application to PocketBase App:
To add React app, just do the following command:
```
npm create react-app <app_name>
```

Example:
```
npm create react-app pb_app
```

## Forgot your Password for PocketBase Admin?
Just in case that you have forgotten your password. What you can do is:<br/>
<b>1.</b> Stop the server of PocketBase in your computer (if it was running).<br/>
<b>2.</b> Delete the `pb_data`<br/>
<b>3.</b> Run your PocketBase<br/>
<b>4.</b> Go to `http://127.0.0.1:8090/_/`<br/>
<b>5.</b> Then you can now set your new email and password. <br/>

<b><em>Note:</em></b> By deleting the `pb_data`, you are deleting the data in your database. <b>DO NOT</b> delete the `pb_migration` because this contains the structure of your database. You may delete it unless you intended to delete the structure of database. But for just to regain access the admin side of your database, just delete the `pb_data`.

## Creating New Collection
The admin UI was straightforward, but in case that you are hesitant here is a brief introduction:
![Steps-1-to-3](https://user-images.githubusercontent.com/74145874/231815970-34dd300e-e440-42aa-9a98-dcd205501a93.jpg)
<b>1.</b> Start with creating your collection. After you click that, a modal will appear on the right.<br/>
<b>2.</b> Name your collection however you want. Think of a collection as a table, and you can see in the suggestion that it follows the naming convention of SQL (where tables are named plural).<br/>
<b>3.</b> After naming your first collection, you can then create the first field in your collection.<br/>

![Steps-4-to-5](https://user-images.githubusercontent.com/74145874/231820524-85f33754-359c-4846-9c39-37ecccbc2594.jpg)
<b>4.</b> After clicking the `New field` button, an options for data type would appear.<br/>
<b>5.</b> Name your first field here. Think of field as column in your database.<br/>
![Steps-6](https://user-images.githubusercontent.com/74145874/231826418-d72eb2df-2c30-4430-9203-4b417951c929.jpg)
<b>6.</b> If you click the cog icon in inline with your field, an option for min and max length would appear as well as the regex.<br/>
![Steps-7](https://user-images.githubusercontent.com/74145874/231828239-2abd1e31-f38d-41c9-a649-6b2304a60b5b.jpg)
![PB-Index-Modal](https://user-images.githubusercontent.com/74145874/231829002-5dd793e2-a7d6-4dab-8f07-3c0a90aa4873.jpg)
<b>7.</b> If you click the "New index" a modal would appear for you to setup you indexes.<br/>

Unfamiliar with indexes? You can read about it [here](https://www.w3schools.com/sql/sql_create_index.asp)<br/>

<b>8.</b> You can now save your first collection. Ow, wait, you aren't able to save it? Well, that was because there is already a "users" collection that initially included in your first PocketBase application.<br/>

I apologize about it, this README was created while firstly exploring PB.

## React and PocketBase SDK Setup
In the tutorial, the following files were added in the root folder of `pb_app`:<br/>
<b>•</b> <em>.env.local</em><br/>
<b>•</b> <em>jsconfig.json</em> - In the code here, what it does is make `src` folder as root directory for importing and avoid the example imports below:<br/>
```javascript
import x from "../../../folder/file";
```
<br/>

<b>•</b> Delete the following in `pb_app/src`:<br/>
    <b>•</b> App.css<br/>
    <b>•</b> App.test.js<br/>
    <b>•</b> index.css<br/>
    <b>•</b> logo.svg<br/>
    <b>•</b> reportWebVitals.js<br/>
    <b>•</b> setupTest.js<br/>
<b>•</b> Remove the following in `index.js`:<br/>

```javascript
import reportWebVitals from './reportWebVitals';
import './index.css';
...
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<br/>

<b>•</b> Remove the following in `App.js`:<br/>
```javascript
import logo from './logo.svg';
import './App.css';
...
    // This is the chuck of code in return statement
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
```
<br/>

<b>•</b> You can now add the JavaScript PocketBase SDK, run the following command in your terminal:
```
npm install pocketbase --save
```
<b><em>Note:</em></b> Make sure you are in `pb_app` directory, where the React app was.<br/>

<b>•</b> Then create `/lib/pocketbase.js` file inside `src` folder, and add the following code snippet:

```javascript
import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_PB_URL);

export default pb;
```

<b><em>Note:</em></b> The value of `REACT_APP_PB_URL` was `http://127.0.0.1:8090`, and it was in the `.env.local`

<b>•</b> Now, to test if everything is working run the following command:

```
npm start
```

## Authentication (With react-hook-form)
`PocketBase` provides a documentation about their authentacation, you can read it [here](https://pocketbase.io/docs/authentication/), in case you want to read more about it.<br/>


### Examples
The following will be a sets of different example of `PocketBase` authentication

#### #1
First, create `Auth.js` in `src`. For now, the Auth component will contain the following:

```javascript
import PB from "lib/pocketbase";

function Auth(){
    return (
        <>
            {/* For a simple example of pocketbase authentication */}
            <h1>Logged In: { PB.authStore.isValid.toString() }</h1>
        </>
    );
}

export default Auth;
```

Import the Auth component to App.js:

```javascript
import Auth from "Auth";

function App() {
  return (
    <>
        <Auth/>
    </>
  );
}

export default App;

```
<br/>

Your browser should display something like this:
![ss-3](https://user-images.githubusercontent.com/74145874/233703193-e66d9942-d932-4023-8ce4-627a791e131c.png)

The first example makes sense that it displays `false`, because a user haven't logged in yet, right?

#### #2
Now, let's level up the previous example. Still in `Auth.js`, do the following:
```javascript
import PB from "lib/pocketbase";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Auth(){
    const { register, handleSubmit } = useForm();
    const [ is_loading, setLoading ] = useState(false);

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

    return (
        <>
            <h1>Logged In: { PB.authStore.isValid.toString() }</h1>
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
```

<br/>
Before we proceed in creating the first user, let's breakdown the example code above because there was a huge change between example #1 and #2.<br/><br/>

- First, is about the `React-hook-form`, which will help us to handle the sample login:
```javascript
const { register, handleSubmit } = useForm();
```

<br/>
To install `react-hook-form` in your project, just run the following command:
```
npm install react-hook-form
```
<b><em>NOTE:</em></b> Make sure you are in `pb_app` folder before you install this npm library.<br/>

- State object that will be used for simple loading indicator.
```javascript
const [ is_loading, setLoading ] = useState(false);
```

<br/>

- Then, the actual code for validation, there was a comment on the code to help breaking it down:
```javascript
async function login(data){
    /* This function was a custom function of handleSubmit() */
    /* Set is_loading to true to indicated the request in on process */
    setLoading(true);

    /* Try catch statement was used to handle the possible error that may occur. */
    try{
        const auth_data = await PB
            /* The 'collection' is the collection of pocketbase */
            .collection("users")
            /* 'authWithPassword' will handle the authentication */
            .authWithPassword(data.email, data.password);
    }
    catch(error){
        console.log(error);
    }

    setLoading(false);
}
```

<br/>

Now, let's create our first user, you use whatever email and password you want:
![sample-user](https://user-images.githubusercontent.com/74145874/233798503-2a222579-6bb3-49b7-9513-5ec14c01d545.png)
![sample-user(1)](https://user-images.githubusercontent.com/74145874/233798616-76b5ab3c-fe45-4c52-8198-b60847c1a52b.png)

After this, you can try if it works.

#### #3
User can now logged in, and for the last example, we will enable users to logged out. Do the this in `Auth.js`:
```javascript
import PB from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Auth(){
    const { register, handleSubmit } = useForm();
    const [ is_loading, setLoading ] = useState(false);
    const is_logged_in = PB.authStore.isValid;

    /* Later, this will be use to re-render the Auth component */
    const [ dummy, setDummy] = useState(0);

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

    function logout(){
        /* logout() function was not an asynchronous function because it doesn't do an API call. Instead, it simply clear the cookie */
        PB.authStore.clear();
        setDummy(Math.random());
    }

    /* Just another way of conditional rendering in React */
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
```

## Auth Hooks (with react-query)
In this part of the documentation, we will be destructuring the example code from previous chapter.<br/>

### Destructuring Logout Function
First, we'll destructure the function for logout. Create a `hooks` folder in `src`, and create `UseLogout.js`, and this will be contain the following code:

```javascript
import PB from "lib/pocketbase";
import { useState } from "react";

function UseLogout(){
    /* Later, this will be use to re-render the Auth component */
    const [ dummy, setDummy] = useState(0);

    function logout(){
        /* logout() function was not an asynchronous function because it doesn't do an API call. Instead, it simply clear the cookie */
        PB.authStore.clear();
        setDummy(Math.random());
    }

    return logout;
}

export default UseLogout;
```
<b><em>NOTE:</em></b> The code above was an example of React custom hooks.

<br/>

The `Auth.js` will look like this:
```javascript
/* The custom hook was imported to Auth.js */
import UseLogout from "hooks/UseLogout";

import PB from "lib/pocketbase";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Auth(){
    /* logout() function was declared like this */
    const logout = UseLogout();
    const { register, handleSubmit } = useForm();
    const [ is_loading, setLoading ] = useState(false);
    const is_logged_in = PB.authStore.isValid;

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
```

<br/>

If you try this, it will work well, but same problem as it was from previous chapter, the credentials you've inputted will remain.<br/>

to resolve this add the `reset` in destructuring of `useForm()`:
```javascript
const { register, handleSubmit, reset } = useForm();
```

<br/>

Then, add this `reset()` funciton to login function:
```javascript
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

    /* reset() was added here */
    reset();
}
```

<br/>

### Destructuring Login Function

Now that we destructure the logout function using custom hook, we'll take a few steps to destructure the login as well.<br/>

Create `UseLogin.js` and will contain the following:
```javascript
import PB from "lib/pocketbase";
import { useState } from "react";

function UseLogin(){
    const [ is_loading, setLoading ] = useState(false);

    async function login({ email, password }){
        /* This function was a custom function of handleSubmit() */
        setLoading(true);

        try{
            const auth_data = await PB
                .collection("users")
                .authWithPassword(email, password);
        }
        catch(error){
            console.log(error);
        }

        setLoading(false);
    }

    return { login, is_loading };
}

export default UseLogin;
```

<br/>

Since we remove login function, the `Auth.js` will looked like this:
```javascript
import UseLogin from "hooks/UseLogin";
import UseLogout from "hooks/UseLogout";
import PB from "lib/pocketbase";
import { useForm } from "react-hook-form";

function Auth(){
    const logout = UseLogout();
    const { login, is_loading } = UseLogin();
    const { register, handleSubmit, reset } = useForm();
    const is_logged_in = PB.authStore.isValid;

    async function onSubmit(data){
        login(data);
        reset();
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

            <form onSubmit={ handleSubmit(onSubmit) }>
                <input type="text" placeholder="email" {...register("email")}/>
                <input type="password" placeholder="password" {...register("password")}/>
                <button type="submit" disabled={ is_loading }>Login</button>
            </form>
        </>
    );
}

export default Auth;
```

### Destructuring API call to PocketBase
In this part of the documentation, we will be using the `react-query`, and to install this library, run this command:
```
npm install react-query
```

<br/>

Before we proceed to destructuring, we have to do the following on `App.js` to be able to implement the `react-query` and do the destructuring:
```javascript
import Auth from "Auth";

/* Import the necessary functions */
import { QueryClientProvider, QueryClient } from "react-query";

/* Initialize the QueryClient */
const queryClient = new QueryClient();

function App() {
    return (
        {/* Wrap the Auth component with QueryClientProvider and use queryClient as client */}
        <QueryClientProvider client={ queryClient }>
            <Auth/>
        </QueryClientProvider>
    );
}

export default App;
```

<br/>

`UseLogin.js` will be looked like this after the destructuring:
```javascript
import PB from "lib/pocketbase";

/* useMutation was imported */
import { useMutation } from "react-query"

/* useState for is_loading was removed because react-query has built-in and it was isLoading*/

function UseLogin(){
    /* Because login() function was used as argument to useMutation, we no longer need to wrap it with try catch */
    async function login({ email, password }){
        /* This function was a custom function of handleSubmit() */
        const auth_data = await PB
            .collection("users")
            .authWithPassword(email, password);
    }

    /* login() was passed in useMutation as argument */
    return useMutation(login)
}

export default UseLogin;
```

<br/>

And because of these changes, the `Auth.js` will looked like this:
```javascript
import UseLogin from "hooks/UseLogin";
import UseLogout from "hooks/UseLogout";
import PB from "lib/pocketbase";
import { useForm } from "react-hook-form";

function Auth(){
    const logout = UseLogout();
    const { 
        /* "mutate" will be used to invoke the login() function */
        mutate, 
        /* "is_loading" is now isLoading() which is available to useMutation() by default */
        isLoading, 
        /* isError was also available to useMutation() by default */
        isError 
    } = UseLogin();
    const { register, handleSubmit, reset } = useForm();
    const is_logged_in = PB.authStore.isValid;

    async function onSubmit(data){
        mutate(data);
        reset();
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
```
If you want to read more about `react-query`, here is the [official documentation](https://tanstack.com/query/v4/docs/react/quick-start).

## Sending Verification Emails with Brevo (formerly Sendinblue) SMTP
In this part of the experiment, we will be using `Sendinblue` to send emails. If you don't have account in 'Sendinblue', you may create your own in this [link](https://onboarding.sendinblue.com/account/register).<br/>

### Setting up your Sendinblue Account
Once you are done creating your own account, you should see this page:
![image](https://user-images.githubusercontent.com/74145874/234631809-550e7d55-a7ba-49e7-ba03-04da3e13b2ec.png)

<br/>

Now, click the `Transactional`, and click the `Settings` in the left navigation bar. You should be able to see this page:
![image](https://user-images.githubusercontent.com/74145874/234632518-148ad164-2ea4-47f2-a606-c955d5bfd4c7.png)

<br/>

Once you are there, click the `Configuration`, and `Get Your SMTP key`. You should be on this page:
![Sendinblue](https://user-images.githubusercontent.com/74145874/234636519-e829a46e-c7ed-4d7a-acfb-943ffbe1decd.jpg)

<br/>

Now, click the `Generate a new SMTP key`, a modal should appear, and you may put any key you want. In my case, I use `lab_exp`. Then click the `Generate` button.<br/>

After you click the `Generate` button, the SMTP key of Sendinblue should appear, copy that and don't loose it.

### Setting up SMTP Server in PocketBase
To set up the SMTP in `PocketBase`, go to the [admin UI home page](http://127.0.0.1:8090/_/?#/collections?collectionId=_pb_users_auth_&filter=&sort=). Then click  the setting icon, and click on `Mail Settings`. You shoul be able to see this page:
![image](https://user-images.githubusercontent.com/74145874/234640342-6fe3603e-76ae-4738-959f-ea6a8f3d8c9e.png)

<br/>

Now, toggle the `Use SMTP mail server (recommended)`. A user interface for configuring your SMTP mail server would appear. Remember the SMTP key you copied earlier? You'll be pasting that in `password` field.
![image](https://user-images.githubusercontent.com/74145874/234645032-620fd19e-09db-4295-8b9d-05d202d7b414.png)

<br/>

For username field, go back to Sendinblue, and close the modal for SMTP key. Copy the `login`:
![Sendinblue(1)](https://user-images.githubusercontent.com/74145874/234646133-41ff7ea8-22fe-4cb0-a4c2-62eb3ec82dbd.jpg)

<br/>

For `SMTP Server Host` field, paste this `smtp-relay.sendinblue.com` which can be seen back in Sendinblue page. Then you may now click the `Save changes`.<br/>

`Send test email` will appear and when you click that you can test if the configuration you made is working.
![Sendinblue(2)](https://user-images.githubusercontent.com/74145874/234647898-bdb1f83f-5070-4fb8-972c-694676149814.jpg)

### Error in Setting up PocketBase Mail Settings
This is an optional part of the documentation in case you encountered an error while setting up the mail settings of `PocketBase`.<br/>

During the experiment at the lab, I encounter this error:
![pb-error](https://user-images.githubusercontent.com/74145874/236878865-afa55a60-f983-4abe-986b-4a4204b2bbe7.png)

To resolved this issue, delete the following files:
- `CHANGELOG.md`
- `LICENSE.md`
- `pocketbase.exe`
- pb_data <br/>

Since you deleted the `pb_data`. you have to repeat the configuration of PocketBase mail settings and create you admin account for Admin UI. You may read the [Dangers of Deleting pb_data](#create-a-link-for-this) included in this documentation.

### PocketBase Collection Types
In `PocketBase`, there are 2 types of collections:
- <b>Base Collection</b> - is the default collection type and you can use it for any type of data.
- <b>Auth Collection</b> - contains extra fields to manage users, like username, email, and verified. Example of `Auth collection` is the PocketBase default users collections.

This was discussed because later we will be creating a simple way of authenticating user.

<em><b>Source:</b></em> https://www.makeuseof.com/pocketbase-what-and-how/#:~:text=Creating%20a%20Collection%20in%20PocketBase&text=A%20collection%20can%20either%20be,username%2C%20email%2C%20and%20verified.

### Getting the Records
In getting the records in PocketBase, here is the example from the [official documentation](https://pocketbase.io/docs/api-records):
```javascript
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

...

const record1 = await pb.collection('posts').getOne('RECORD_ID', {
    expand: 'relField1,relField2.subRelField',
});
```

<br/>

This is how we implement it in `hooks/UseVerified.js`:
```javascript
const user_id = PB.authStore.model.id;
const user_data = await PB.collection("users").getOne(user_id);

setIsVerified(user_data.verified);
```

### Sending the Email Verification
To start off, we need the following:
- First, a button that will send email verification.
- Then, a function that will handle the click event for sending email verification.
- Lastly, an indicator whether the user is verified or not.<br/>

Earlier, the `UseVerified.js was mentioned`, add the following function to that file:
```javascript
async function requestVerification(){
    const email = PB.authStore.model.email;
    const response = await PB.collection("users").requestVerification(email);

    if(response){
        alert("Verification email sent! Check your inbox.");
    }
}
```
I know that you may not catch up with the changes in `UseVerified.js`, you may look at the [code](https://github.com/MadrinanComLab/Exp-PocketBase/blob/master/pb_app/src/hooks/UseVerified.js).<br/>

Now, we're done with the function that will handle the sending of email. In `Auth.js`, import the `UseVerified` custom hook:
```javascript
import UseVerified from "hooks/UseVerified";
...
const { is_verified, requestVerification } = UseVerified();
```

Now, create the indicator and the button in `Auth.js`:
```javascript
<p>Verified: { is_verified.toString() }</p>
{ !is_verified && <button onClick={requestVerification}>Send Verification</button> }
```
You may look where the code added [here](https://github.com/MadrinanComLab/Exp-PocketBase/blob/master/pb_app/src/components/Auth.js).<br/>

In testing it, you should use your email account, and you should be able to received this email once you test it:
![Verified](https://user-images.githubusercontent.com/74145874/236542192-fe1524a1-bf82-4c80-878c-37440683f95b.png)

Click the `Verify` button in the email, and return to your React app, refresh it. The `Verified` should have a value of `true` now.


----
### Did You Like This Experiment?
Stay tuned for upcoming projects and experiments by following me on the following accounts:
<p float="left">
  <a href="https://twitter.com/MadrinanComLab">
  <img src="https://user-images.githubusercontent.com/74145874/219954290-0afa8626-f2b5-44a9-8130-1ccce187ac06.png" width="50px" title="Twitter"/>
  </a>
  <a href="https://www.linkedin.com/in/john-clifford-madri%C3%B1an-3b5ba222a/">
  <img src="https://user-images.githubusercontent.com/74145874/219954352-03919daf-97cf-4639-80a8-dab307ad1964.png" width="50px" title="Linkedin"/>
  </a>
</p>
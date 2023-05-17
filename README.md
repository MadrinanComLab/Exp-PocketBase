<section id="top"></section>

# Welcome to PocketBase Experiment!
![PocketBase-Experiment](https://github.com/MadrinanComLab/Exp-PocketBase/assets/74145874/e8b62d14-7886-4e93-836f-f688fc52a087)

**Reference for this experiment:** https://www.youtube.com/watch?v=rediFff54JA&t=75s<br/>
This experiment was initiated on April 9, 2023.

## Table of Contents
- [Introduction to PocketBase](#pocketbase-introduction)
- [How to Run PocketBase?](#how-to-run-pocketbase)
- [Explaining the Links](#explaining-the-links)
- [Folders in a Pre-Built Pocket Base](#pb-pre-built-folders)
- [User-Defined Folder](#user-defined-folder)
- [Adding a React Application to a PocketBase App](#add-react-app-to-pb)
- [Regaining Access to the PocketBase Admin UI](#regain-access-to-pb-admin-ui)
- [Dangers of Deleting pb_data](#dangers-of-deleting-pb-data)
- [Creating a New Collection](#creating-new-collection)
- [React and PocketBase SDK Setup](#react-pb-sdk-setup)
- [Authentication (with react-hook-form)](#authentication)<br/>
• [Example #1](#authentication-example-1)<br/>
• [Example #2](#authentication-example-2)<br/>
• [Example #3](#authentication-example-3)
- [Auth Hooks (with react-query)](#auth-hooks)<br/>
• [Destructuring Logout Function](#destructuring-logout-function)<br/>
• [Destructuring Login Function](#destructuring-login-function)<br/>
• [Destructuring API call to PocketBase](#destructuring-api-call-to-pb)
- [Sending Verification Emails with Brevo (formerly Sendinblue) SMTP](#sending-verification-emails-with-brevo)</br>
• [Setting up an SMTP Server in PocketBase](#setting-up-your-sendinblue-account)</br>
• [Setting up an SMTP Server in PocketBase](#setting-up-an-smtp-server-in-pb)</br>
• [Error in Setting up PocketBase Mail Settings](#error-in-setting-up-pb-mail-settings)</br>
• [PocketBase Collection Types](#pb-collection-types)</br>
• [Sending the Email Verification](#sending-the-email-verification)</br>
- [Automatic Re-fetching with the useQuery Hook](#auto-refetching-wth-the-usequery-hook)</br>
• [Explaining the Attributes of the useQuery Option](#explaining-the-attributes-of-the-usequery-option)

<section id="pocketbase-introduction"></section>

## Introduction to PocketBase
`PocketBase` is similar to `Firebase` (a Google service) and `Supabase` (an open-source Firebase alternative), which handle backend functions like file upload, saving data to a database, etc.<br/>

I know that my introduction to PocketBase was too short to describe it, so here is the [link](https://www.youtube.com/watch?v=Wqy3PBEglXQ) to a video of Fireship where he fully introduces PocketBase.</br>

You can download `PocketBase` using this [link](https://pocketbase.io/docs).<br/>

*[Back to top](#top)*

<section id="how-to-run-pocketbase"></section>

## How to Run PocketBase?
Once you've downloaded `PocketBase` and it was now in `Downloads`, do the following:<br/>
**1.** Extract the ZIP file that you downloaded.<br/>
**2.** Rename it `PocketBase` or however you like, but keep it short.<br/>
**3.** Go to that directory, e.g., `Downloads/PocketBase`.<br/>
**4.** Now enter this command:
```
./pocketbase serve
```
If the command above didn't work for you, try this:
```
pocketbase serve
```

***Note:*** The `pocketbase` you see in the command is not the folder name, it was the keyword for the command.<br/><br/>
**5.** After running the previous command you will see something like this:
```javascript
2023/04/09 22:11:46 Server started at http://127.0.0.1:8090
 ➜ REST API: http://127.0.0.1:8090/api/
 ➜ Admin UI: http://127.0.0.1:8090/_/
```

*[Back to top](#top)*

<section id="explaining-the-links"></section>

## Explaining the Links
Based on the official documentation, the meaning of the links are the following:<br/>
**•** `http://127.0.0.1:8090` - if pb_public directory exists, serves the static content from it (html, css, images, etc.)<br/>
**•** `http://127.0.0.1:8090/_/` - Admin dashboard UI<br/>
**•** `http://127.0.0.1:8090/api/` - REST API<br/>

*[Back to top](#top)*

<section id="pb-pre-built-folders"></section>

## Folders in a Pre-Built Pocket Base
The prebuilt PocketBase executable will automatically create and manage 2 new directories alongside the executable:<br/>
**•** `pb_data` - stores your application data, uploaded files, etc. (usually should be added in `.gitignore`).<br/>
**•** `pb_migrations` - contains JS migration files with your collection changes (can be safely committed in your repository).

*[Back to top](#top)*
<br/><br/>

<section id="user-defined-folder"></section>

## User-Defined Folder
You have to add the following folder:<br/>
`pb_public` - This is the folder that will be hosted by PocketBase. Here is an example:<br/>
**1.** After creating the `pb_public` folder, create a file inside this folder named `index.html` and copy and paste the following code:
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
**2.** Then go to this URL:
```
http://127.0.0.1:8090/
``` 

*[Back to top](#top)*

<section id="add-react-app-to-pb"></section>

## Adding a React Application to a PocketBase App:
To add the React app, just do the following command:
```
npm create react-app <app_name>
```

Example:
```
npm create react-app pb_app
```

*[Back to top](#top)*

<section id="regain-access-to-pb-admin-ui"></section>

## Regaining Access to the PocketBase Admin UI
Just in case you have forgotten your password. What you can do is:<br/>
**1.** Stop the server of PocketBase on your computer (if it is running).<br/>
**2.** Delete the `pb_data`<br/>
**3.** Run your PocketBase<br/>
**4.** Go to `http://127.0.0.1:8090/_/`<br/>
**5.** Then you can now set your new email and password. <br/>

*[Back to top](#top)*

<section id="dangers-of-deleting-pb-data"></section>

## Dangers of Deleting `pb_data`
Deleting this folder was helpful when you forgot your password for the admin UI, but deleting it will also affect the configuration you set in your PocketBase application. 

Later on, configuring the mail settings of PocketBase will be discussed in this documentation.

***Additional Note:*** By deleting the `pb_data`, you are deleting the data in your database. **DO NOT** delete `pb_migration` because this contains the structure of your database. You may delete it unless you intend to delete the structure of the database. But to just regain access to the admin side of your database, just delete the `pb_data`.

*[Back to top](#top)*

<section id="creating-new-collection"></section>

## Creating a New Collection
The admin UI was straightforward, but in case you are hesitant, here is a brief introduction:
![Steps-1-to-3](https://user-images.githubusercontent.com/74145874/231815970-34dd300e-e440-42aa-9a98-dcd205501a93.jpg)
**1.** Start with creating your collection. After you click that, a modal will appear on the right. <br/>
**2.** Name your collection however you want. Think of a collection as a table, and you can see in the suggestion that it follows the naming convention of SQL (where tables are named plural).<br/>
**3.** After naming your first collection, you can then create the first field in your collection.<br/>

![Steps-4-to-5](https://user-images.githubusercontent.com/74145874/231820524-85f33754-359c-4846-9c39-37ecccbc2594.jpg)
**4.** After clicking the `New field` button, options for data type would appear.<br/>
**5.** Name your first field here. Think of a field as a column in your database.<br/>
![Steps-6](https://user-images.githubusercontent.com/74145874/231826418-d72eb2df-2c30-4430-9203-4b417951c929.jpg)
**6.** If you click the cog icon inline with your field, an option for min and max length would appear as well as the regex.<br/>
![Steps-7](https://user-images.githubusercontent.com/74145874/231828239-2abd1e31-f38d-41c9-a649-6b2304a60b5b.jpg)
![PB-Index-Modal](https://user-images.githubusercontent.com/74145874/231829002-5dd793e2-a7d6-4dab-8f07-3c0a90aa4873.jpg)
**7.** If you click "New index," a modal will appear for you to setup your indexes.<br/>

Unfamiliar with indexes? You can read about it [here](https://www.w3schools.com/sql/sql_create_index.asp)<br/>

**8.** You can now save your first collection. Ow, wait, you aren't able to save it? Well, that was because there is already a "users" collection that was initially included in your first PocketBase application.<br/>

I apologize about it; this README was created while first exploring PocketBase.

*[Back to top](#top)*

<section id="react-pb-sdk-setup"></section>

## React and PocketBase SDK Setup
In the tutorial, the following files were added to the root folder of `pb_app`:<br/>
**•** *.env.local*<br/>
**•** *jsconfig.json* - In the code here, what it does is make the `src` folder the root directory for importing and avoid the example imports below.:<br/>
```javascript
import x from "../../../folder/file";
```
<br/>

**•** Delete the following in `pb_app/src`:<br/>
    **•** *App.css*<br/>
    **•**  *App.test.js*<br/>
    **•**  *index.css*<br/>
    **•**  *logo.svg*<br/>
    **•**  *reportWebVitals.js*<br/>
    **•**  *setupTest.js*<br/>
**•** Remove the following in `index.js`:<br/>

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

**•** Remove the following in `App.js`:<br/>
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
</br>

**•** You can now add the JavaScript PocketBase SDK by running the following command in your terminal:
```
npm install pocketbase --save
```

***Note:*** Make sure you are in the `pb_app` directory, where the React app is.<br/>

**•** Then create the `/lib/pocketbase.js` file inside the `src` folder and add the following code snippet:

```javascript
import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_PB_URL);

export default pb;
```

***Note:*** The value of `REACT_APP_PB_URL` was `http://127.0.0.1:8090`, and it was in the `.env.local`

**•** Now, to test if everything is working, run the following command:

```
npm start
```

*[Back to top](#top)*

<section id="authentication"></section>

## Authentication (with react-hook-form)

`PocketBase` provides documentation about their authentication; you can read it [here](https://pocketbase.io/docs/authentication/) if you want to read more about it.<br/>

### Examples
The following will be a set of different examples of `PocketBase` authentication.

<section id="authentication-example-1"></section>

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

The first example makes sense that it displays `false` because a user hasn't logged in yet, right?

<section id="authentication-example-2"></section>

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

Before we proceed with creating the first user, let's breakdown the example code above because there was a huge change between examples `#1` and `#2`.<br/><br/>

- First is about the `React-hook-form`, which will help us handle the sample login:
```javascript
const { register, handleSubmit } = useForm();
```

<br/>
To install `react-hook-form` in your project, just run the following command:
```
npm install react-hook-form
```
***Note:*** Make sure you are in `pb_app` folder before you install this npm library.<br/>

- State object that will be used for a simple loading indicator.
```javascript
const [ is_loading, setLoading ] = useState(false);
```

<br/>

- Then, on the actual code for validation, there was a comment on the code to help break it down:
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

Now, let's create our first user. You can use whatever email and password you want:
![sample-user](https://user-images.githubusercontent.com/74145874/233798503-2a222579-6bb3-49b7-9513-5ec14c01d545.png)
![sample-user(1)](https://user-images.githubusercontent.com/74145874/233798616-76b5ab3c-fe45-4c52-8198-b60847c1a52b.png)

After this, you can try it to see if it works.

<section id="authentication-example-3"></section>

#### #3
Users can now log in, and for the last example, we will enable users to log out. Do this in `Auth.js`.:
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

*[Back to top](#top)*

<section id="auth-hooks"></section>

## Auth Hooks (with react-query)
In this part of the documentation, we will be destructuring the example code from previous chapter.<br/>

<section id="destructuring-logout-function"></section>

### Destructuring Logout Function
First, we'll destructure the function for logging out. Create a `hooks` folder in `src` and create `UseLogout.js`, which will contain the following code:

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
***Note:*** The code above was an example of React custom hooks.

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

If you try this, it will work well, but the same problem as in the previous chapter will remain: the credentials you've inputted will remain.<br/>

To resolve this, add `reset` in the destructuring of `useForm()`:
```javascript
const { register, handleSubmit, reset } = useForm();
```

<br/>

Then, add this `reset()` function to the login function:
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

<section id="destructuring-login-function"></section>

### Destructuring Login Function

Now that we've destructured the logout function using a custom hook, we'll take a few steps to destructure the login as well.<br/>

Create `UseLogin.js` and it will contain the following:
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

Since we removed the login function, `Auth.js` will look like this:
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

<section id="destructuring-api-call-to-pb"></section>

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

`UseLogin.js` will look like this after the destructuring:
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

And because of these changes, `Auth.js` will look like this:
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

*[Back to top](#top)*

<section id="sending-verification-emails-with-brevo"></section>

## Sending Verification Emails with Brevo (formerly Sendinblue) SMTP
In this part of the experiment, we will be using `Sendinblue` to send emails. If you don't have account in 'Sendinblue', you may create your own in this [link](https://onboarding.sendinblue.com/account/register).

In this part of the experiment, we will be using `Sendinblue` to send emails. If you don't have an account at 'Sendinblue', you may create one at this [link](https://onboarding.sendinblue.com/account/register).<br/>

<section id="setting-up-your-sendinblue-account"></section>

### Setting up your Sendinblue Account
Once you are done creating your own account, you should see this page:
![image](https://user-images.githubusercontent.com/74145874/234631809-550e7d55-a7ba-49e7-ba03-04da3e13b2ec.png)

<br/>

Now, click `Transactional` and then `Settings` in the left navigation bar. You should be able to see this page:
![image](https://user-images.githubusercontent.com/74145874/234632518-148ad164-2ea4-47f2-a606-c955d5bfd4c7.png)

<br/>

Once you are there, click `Configuration` and `Get Your SMTP Key.` You should be on this page.
![Sendinblue](https://user-images.githubusercontent.com/74145874/234636519-e829a46e-c7ed-4d7a-acfb-943ffbe1decd.jpg)

<br/>

Now, click `Generate a new SMTP key.` A modal should appear, and you may enter any key you want. In my case, I use `lab_exp`. Then click the `Generate` button.<br/>

After you click the `Generate` button, the SMTP key of Sendinblue should appear; copy that and don't lose it.

<section id="setting-up-an-smtp-server-in-pb"></section>

### Setting up an SMTP Server in PocketBase

To set up SMTP in `PocketBase`, go to the [admin UI home page](http://127.0.0.1:8090/_/?#/collections?collectionId=_pb_users_auth_&filter=&sort=). Then click the setting icon and click on `Mail Settings`. You should be able to see this page:

![image](https://user-images.githubusercontent.com/74145874/234640342-6fe3603e-76ae-4738-959f-ea6a8f3d8c9e.png)

<br/>

Now, toggle `Use SMTP mail server (recommended)`. A user interface for configuring your SMTP mail server would appear. Remember the SMTP key you copied earlier? You'll be pasting that in the `password` field.
![image](https://user-images.githubusercontent.com/74145874/234645032-620fd19e-09db-4295-8b9d-05d202d7b414.png)

<br/>

For the username field, go back to Sendinblue and close the modal for the SMTP key. Copy the `login`:
![Sendinblue(1)](https://user-images.githubusercontent.com/74145874/234646133-41ff7ea8-22fe-4cb0-a4c2-62eb3ec82dbd.jpg)

<br/>

For the `SMTP Server Host` field, paste `smtp-relay.sendinblue.com`, which can be seen back on the Sendinblue page. Then you may now click `Save changes`.<br/>

`Send test email` will appear, and when you click that, you can test if the configuration you made is working.
![Sendinblue(2)](https://user-images.githubusercontent.com/74145874/234647898-bdb1f83f-5070-4fb8-972c-694676149814.jpg)

<section id="error-in-setting-up-pb-mail-settings"></section>

### Error in Setting up PocketBase Mail Settings
This is an optional part of the documentation in case you encountered an error while setting up the mail settings of `PocketBase`.<br/>

During the experiment at the lab, I encounter this error:
![pb-error](https://github.com/MadrinanComLab/Exp-PocketBase/assets/74145874/1c13cb98-bdcf-47e1-8aee-673fedf8cffd)

To resolve this issue, delete the following files:
- `CHANGELOG.md`
- `LICENSE.md`
- `pocketbase.exe`
- pb_data <br/>

Since you deleted the `pb_data`. You have to repeat the configuration of PocketBase mail settings and create an admin account for the Admin UI. You may read the [Dangers of Deleting pb_data](#dangers-of-deleting-pb-data) included in this documentation.

<section id="pb-collection-types"></section>

### PocketBase Collection Types
In `PocketBase`, there are two types of collections:
- **Base Collection** - is the default collection type, and you can use it for any type of data.
- **Auth Collection** - contains extra fields to manage users, like username, email, and verified. An example of an `Auth collection` is the PocketBase default user collections.

This was discussed because later we will be creating a simple way of authenticating users.

***Source:*** https://www.makeuseof.com/pocketbase-what-and-how/#:~:text=Creating%20a%20Collection%20in%20PocketBase&text=A%20collection%20can%20either%20be,username%2C%20email%2C%20and%20verified.

### Getting the Records
In getting the records into PocketBase, here is an example from the [official documentation](https://pocketbase.io/docs/api-records):
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

<section id="sending-the-email-verification"></section>

### Sending the Email Verification
To start off, we need the following:
- First, a button that will send email verification
- Then, a function will handle the click event for sending email verification.
- Lastly, an indicator of whether the user is verified or not<br/>

Earlier, `UseVerified.js` was mentioned; add the following function to that file:
```javascript
async function requestVerification(){
    const email = PB.authStore.model.email;
    const response = await PB.collection("users").requestVerification(email);

    if(response){
        alert("Verification email sent! Check your inbox.");
    }
}
```
Now, we're done with the function that will handle the sending of emails. In `Auth.js`, import the `UseVerified` custom hook:
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

Your `UseVerified.js` should look like the following:
```javascript
import {  useState, useEffect } from "react";
import PB from "lib/pocketbase";

function UseVerified(){
    const [ is_verified, setIsVerified ] = useState(false);

    useEffect(() => {
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
```
In testing it, you should use your email account, and you should be able to receive this email once you test it:
![Verified](https://user-images.githubusercontent.com/74145874/236542192-fe1524a1-bf82-4c80-878c-37440683f95b.png)

Click the `Verify` button in the email, return to your React app, and refresh it. `Verified` should have a value of `true` now.<br/>

*[Back to top](#top)*

<section id="auto-refetching-wth-the-usequery-hook"></section>

## Automatic Re-fetching with the useQuery Hook
In this chapter of the documentation, we will be making changes to the app from the previous chapter and enabling it to reflect the changes that are happening in the database (PocketBase).

In order to do this, we will be using `useQuery` in React, and you may visit the official documentation by clicking [this](https://tanstack.com/query/v4/docs/react/reference/useQuery).

There will be a huge changes in `UseVerified.js`, first import the `useQuery`:

There will be huge changes in `UseVerified.js`. First,  import `useQuery`.
```javascript
import { useQuery } from "react-query";
```

Then `UseVerified()` will have a different return value:
```javascript
return useQuery({
    queryFn: checkVerified,
    queryKey: [ "check-verified", user_id ]
});
```
This is the last chapter in this documentation; you can click [this](https://github.com/MadrinanComLab/Exp-PocketBase/blob/master/pb_app/src/hooks/UseVerified.js) to see the whole change in `UseVerified.js`. There were minor changes in `Auth.js` as well; you can click [this](https://github.com/MadrinanComLab/Exp-PocketBase/blob/master/pb_app/src/components/Auth.js to see the changes.

<section id="explaining-the-attributes-of-the-usequery-option"></section>

### Explaining the Attributes of the `useQuery` Option
Keys in the option of `useQuery` was case sensitive. For example, you cannot make queryFn into queryFunction or other keys that you may wish to use.

The object that is used as an argument is called `options`, and each of its attributes has a different purpose:

- `queryFn` - The function you will assign here will be responsible for fetching the data you need.

***Note:*** Since `checkVerified`  was used to be the value of `queryFunction`, the return value of it will change:
```javascript
return user_data.verified
```

- `queryKey` - This will be used for data caching, and the value of `"check-verified"` will be the key, and `user_id` is the second argument, which in this case will be used to query the user by its record id.

***Note:*** The value of `user_id` will come from the code snippet below. Remember, this will have a value when you log in a user, then it becomes `undefined` when no user is logged in, and that is why optional chaining was implemented.
```javascript

...
export default function UseVerified(){
    const user_id = PB.authStore.model?.id;
    ...
}
```

*[Back to top](#top)*

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
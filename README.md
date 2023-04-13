# Welcome to PocketBase Experiment!
<b>Reference for this experiment:</b> https://www.youtube.com/watch?v=rediFff54JA&t=75s<br/>
This experiment initiated in April 9, 2023

## Introduction to PocketBase
`PocketBase` is similar to `Firebase` (a Google service) and `Supabase` (an open-source Firebase alternative), which handles the backend function like file upload, saving data to a database, etc.<br/>

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
<b>2.</b> Delete the pb_data, pb_migrations and pb_public<br/>
<b>3.</b> Run your PocketBase<br/>
<b>4.</b> Go to `http://127.0.0.1:8090/_/`<br/>
<b>5.</b> Then you can now set your new email and password. 

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
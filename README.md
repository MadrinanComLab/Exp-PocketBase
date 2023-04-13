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
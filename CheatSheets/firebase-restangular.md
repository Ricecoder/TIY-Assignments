##Firebase

1. What operations does the Firebase REST API support?

`get`, `put`, `post`, `patch`, `delete`


2. Do I need to authenticate with Firebase to read or create data?

No


3. What format does Firebase expect data to be in?

`.json`


##Restangular

1. How do I configure a REST-ful API like Github?

[With the `run` configuration.](https://github.com/mgonto/restangular/blob/master/README.md#how-to-configure-them-globally)


2. [How would I request a list of...](https://github.com/mgonto/restangular/blob/master/README.md#collection-methods)

* Repos for the class Org?

`customGETLIST(path for class Org)`

* Issues for the class Repo?

`customGETLIST(path for class Repo)`

* Issues for a specific Milestone?

`customGETLIST(path for milestone?)`


##ngRouter
How do I define...
...a route for my application with ngRouter?
...dynamic pieces (params) to routes?
...the template to load for a route?
...the controller to trigger for a route?
How do I retrieve...
...the params from a route in a controller?
...the controller for a route in the view?

## 10/21
1. What credentials do I need to authenticate with the Github API?

Either a username and password, a token, or a key and secret.


2. How can I provide authentication credentials to Github?

Best way is to go to settings on GitHub and to Personal Access Tokens.
 

3. How can I use [Firebase to authenticate with GitHub?](https://www.firebase.com/docs/web/guide/login/github.html)

You need to [register an application on GitHub](https://github.com/settings/applications) that includes the application name, homepage url, application description, and authorized callback url `https://auth.firebase.com/v2/<YOUR-FIREBASE-APP>/auth/github/callback`.
 
5. What type of information will Firebase require from me to integrate with GitHub?

Need GitHub application credentials (Client ID and Client Secret)


5. What credentials will Firebase provide me when I have successfully authenticated?

A client ID and secret?


6. How and where do I need to use those credentials?

On the Login & Auth section of the App Dashboard.

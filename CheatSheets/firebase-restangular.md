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

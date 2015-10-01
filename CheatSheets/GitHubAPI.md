# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

* Do I need to authenticate? 
We can make 60 requests per hour without authenticating but in order to do more or to do "interesting" things with the github API we need to be authenticated.

* What can I do with an unauthenticated request? 
Make 60 requests per hour. 

* What _can't_ I do with an unauthenticated request? 
Make more than 60 requests per hour and read/write private info. The error `403 Forbidden` will be returned if you have exceeded your limit.

* How can I authenticate my request?

1. First way -- Basic Authentication- uses your GitHub username and password
```
$ curl -i -u <your_username> https://api.github.com/users/defunkt

Enter host password for user '<your_username>':
```
The `-u` flag sets your username and the cURL prompts you for the password.  

2. Second way -- OAuth- uses tokens instead of username and password. This makes it safer/more secure as no one can see your username/password. Also users can have their access revoked by a third party and it allows the user to review the access a token will provide before authorizing a third party app. 

OAuth2 Token (sent in a header)
```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
OAuth2 Token (sent as a parameter)
```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN
```
3. Third way -- OAuth2 Key/Secret- used in server to server senarios.
```
$ curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'
```

-[tutorial](https://developer.github.com/guides/getting-started/)



## [Users](https://developer.github.com/v3/users/)

* How do I ask the API for the profile information for a specific user?
The `get` command.  
```
# GET /users/:username
```
Data is returned as a json.

* Getting a user's repo:
`GET /user/repos`

* Public events performed by a user
`GET /users/:username/events/public`

*You can use `?page` to adjust the pages returned. The default is 30 items. https://developer.github.com/guides/traversing-with-pagination/


9/29

1. What are the endpoints for fetching...

An endpoint is any URL that will return info back.

* the profile data for a user? 
 
https://api.github.com/users/USERNAME

* the organizations a user belongs to?

https://api.github.com/users/USERNAME/orgs

* the repositories a user has created?

https://api.github.com/users/USERNAME/repos

* a filtered list of repositories?

You can use parameters such as `visibility`, `affilitiation`, `type`, and `direction` to filter your results.

* a sorted list of repositories?

Use the `sort` parameter to sort the results into `created`, `updated` `pushed`, and `full_name`.

* public events for a user?

https://api.github.com/users/USERNAME/events/public

2. When fetching public events for a user...

* How many results are returned by default?

The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events.

* What limitations exist on fetching more results?

Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300).

* What is the basic structure of the results?

```
  Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
  ```

* What fields are included in each result?

Type, public, payload, repo (id, name, url), actor (id, login, gravatar_id, avatar_url, url), org (id, login, gravatar_id, url, avatar_url), created_at and id.

* What are the data types for each field?

All data types are represented as Strings except for the "id" field which is represented as a Number and the "public" field which is represented as a Boolean.

* What are some of the different values for the `type` field? 

 Links, file paths, strings, empty strings, string of numbers, Numbers
 
 
 ##9/30
 
 
1. How can I use the Github API to...

* get all the comments for a particular issue?

* add a comment to an issue?

And since libraries like jQuery and Lodash have feelings... I mean APIs, too, read through some of the documentation to answer these questions:

2. How can I use the jQuery API to...

* get the HTML contents of an element?

* create a new HTML element?

* add an HTML element to the page?

3. How can I use the Lodash API to...

* replace placeholders with values from an object?

* repeat code for every item of an array?

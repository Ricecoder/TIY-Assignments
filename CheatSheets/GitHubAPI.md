# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

* Do I need to authenticate? 
We can make 60 requests per hour without authenticating but in order to do more or to do "interesting" things with the github API we need to be authenticated.

* What can I do with an unauthenticated request? 
Make 60 requests per hour. 

* What _can't_ I do with an unauthenticated request? 
Make more than 60 requests per hour and read/write private info. 

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

> How do I ask the API for the profile information for a specific user?
The `get` command. This example gets user defunkt's profile. 
```
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt
```
```
{
  "login": "defunkt",
  "id": 2,
  "url": "https://api.github.com/users/defunkt",
  "html_url": "https://github.com/defunkt",
  ...
}
```

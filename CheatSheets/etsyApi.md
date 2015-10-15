###1. How do I make API requests?

`GET` : Reads a resource. Returns `HTTP 200` when successful.

`POST` : Creates a new resource. Returns `HTTP 201` when successful. 

`PUT`: Updates a resource. Returns `HTTP 200` when successful.

`DELETE`: Deletes a resource. Returns `HTTP 200` when successful.

EX:
`GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}`



###2. What is the base URL for all requests?

`https://openapi.etsy.com/v3/`


###3. Are there any headers or query parameters required?

Parameters and headers are not required unless needed to specifie something specific.


###4. What kind of response should I expect?

Outputs of `JSON` or `JSONP`. `.json` is the default.


###5. How does the API handle authentication?

New users must register an application and recieve a provisional API key. They then can use that to get an OAuth token.


###6. Do I need to authenticate? with user credentials?

You do need to authenticate. You first apply for temporary credentials and then the OAuth authentication. 


###7. What can I do with an unauthenticated request?

Nothing. You must authenticate. 

###8. How can I authenticate my request? (what methods)

 OAuth 2.0, public api key-based authentication.
 
 
 
##What Resource in the API represents...

###an individual product?

fields and associations


###a group or collection of products?

associations


###images associated with a product?

associations
loads only the first image (limit 1, offset 0): /v2/listings/active?includes=Images:1:0


###sizes and colors for a product?


###What actions and endpoints exist for each of these Resources?


###What parameters do each endpoint require or accept?

fields, associations, limit/offset


###What fields are returned for each Resource, specifically:

###an individual product?

You can control which fields are returned using:/v2/listings/active?fields=listing_id,title,price
You can also specify which fields of an association returned: /v2/listings/active?includes=Images(url_75x75,hex_code)

###a group or collection of products?

v2/listings/active?includes=Images,Shop


###What additional fields can be requested for each?

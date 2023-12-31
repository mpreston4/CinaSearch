### Get Token

# * Endpoint path: /token
# * Endpoint method: GET

# * Response: Current account and token information
# * Response shape (JSON):

#   {
#       "access_token": "string",
#       "token_type": "Bearer",
#       "account": {
#           "id": "string",
#           "email": "string",
#           full_name": "string"
#       }
#   }


### Create account

# * Endpoint path: /api/accounts
# * Endpoint method: POST

# * Request shape (JSON):

#   {
#       email: string
#       password: string
#       full_name: string
#   }

# * Response: Created account information
# * Response shape (JSON):

#   {
#       "access_token": string
#       "token_type": string
#       "account": {
#           id: string
#           email: string
#           full_name: string
#       }
#   }


### Login

# * Endpoint path: /token
# * Endpoint method: POST

# * Request shape (form):
#   * username: string
#   * password: string

# * Response: Token information
# * Response shape (JSON):

#   {
#       "access_token": string
#       "token": string
#   }



### Logout

# * Endpoint path: /token
# * Endpoint method: DELETE

# * Headers:
#   * Authorization: Bearer token

# * Response: Always true
# * Response shape:
#     true

### Get All Movies

# * Endpoint path: /api/movies
# * Endpoint method: GET

# * Response: A list of movies and values to indicate the next/prev set of movies
# * Response shape (JSON):

#   {
#       "movies": [
#           {
#               "movie_id": string,
#               "title": string,
#               "picture_url": string,
#           }
#          ]
#       "current_page": int,
#       "api_start_page": str,
#       "api_end_page": str,
#       "first_movie_index": int,
#       "last_movie_index": int,
#       "next": true
#   }


### Get Movie Details

# * Endpoint path: /api/movies/{movie_id}
# * Endpoint method: GET

# * Response: Movie information
# * Response shape (JSON):

#   {
#       "movie_id": string,
#       "title": string,
#       "picute_url": string,
#       "plot": string,
#       "rating": string
#       "runtime": string,
#       "release_year": string,
#       "genres": [
#           "string"
#       ]
#   }


### Get All Favorites

# * Endpoint path: /api/favorites
# * Endpoint method: GET

# * Headers:
#   * Authorization: Bearer token

# * Response: A list of movies saved bu current account
# * Response shape (JSON):

#   {
#       "favorites": [
#           {
#               "movie_id": "string",
#               "title": "string",
#               "picture_url": "string",
#               "account_email": "string",
#               "has_watched": true
#           }
#       ]
#   }

### Create Favorite

# * Endpoint path: /api/favorites
# * Endpoint method: POST

# * Headers:
#   * Authorization: Bearer token

#  * Request shape (JSON):
#   {
#       "movie_id": "string",
#       "title": "string",
#       "picture_url": "string"
#   }

# * Response: Created favorite information
# * Response shape (JSON):

#   {
#       "movie_id": "string",
#       "title": "string",
#       "picture_url": "string",
#       "account_email": "string",
#       "has_watched": true
#   }

### Update Favorite

# * Endpoint path: /api/favorites/{movie_id}
# * Endpoint method: PUT

# * Headers:
#   * Authorization: Bearer token

# * Response: Updated favorite information
# * Response shape (JSON):

#   {
#       "movie_id": "string",
#       "title": "string",
#       "picture_url": "string",
#       "account_email": "string",
#       "has_watched": true
#   }

### Delete Favorite

# * Endpoint path: /api/favorites/{movie_id}
# * Endpoint method: DELETE

# * Headers:
#   * Authorization: Bearer token

# * Response: True or false
# * Response shape :
#   true

### Get All Genres

# * Endpoint path: /api/genres
# * Endpoint method: GET

# * Response: List of genres
# * Response shape (JSON):

#   {
#       "genres": [
#           "string"
#       ]
#   }

### Get All Accounts

# * Endpoint path: /api/genres
# * Endpoint method: GET

# * Response: List of account emails
# * Response shape (JSON):

#   {
#       "accounts": [
#           "string"
#       ]
#   }

## Get Token

# * Endpoint path: /token
# * Endpoint method: GET

# * Response: Token for Current User
# * Response shape (JSON):

# {
    #   "access_token": "string",
    #   "token_type": "Bearer",
    #   "account": {
    #     "id": "string",
    #     "email": "string",
    #     "full_name": "string"
#      }
#   }

### Sign Up

# * Endpoint path: /api/accounts
# * Endpoint method: POST

# * Request shape: json:
    #   {
    #       email: string
    #       password: string
    #       full_name: string
    #   }

# * Response: Token information
# * Response shape (JSON):
#
#     ```json
#     {
#       "access_token": string
#       "token_type": string
#       "account": {
#           id: string
#           email: string
#           full_name: string
#       }
#     }
#     ```

### Log in

# * Endpoint path: /token
# * Endpoint method: POST

# * Request shape (form):
#   * username: string
#   * password: string

# * Response: Token information
# * Response shape (JSON):
#     ```json
#     {
#       "access_token": string
#       "token": string
#     }
#     ```


### Log out

# * Endpoint path: /token
# * Endpoint method: DELETE

# * Headers:
#   * Authorization: Bearer token

# * Response: Always true
# * Response shape (JSON):
#     ```json
#     true
#     ```

### Get a list of movies

# * Endpoint path: /api/movies
# * Endpoint method: GET

#   headers: {
#     'X-RapidAPI-Key': enum,
#     'X-RapidAPI-Host': string,
#   }

# * Response: A list of movies
# * Response shape (JSON):
#   * Authorization: Bearer token
#
#     ```json
    # {
    #   "movies": [
    #     {
    #       "movie_id": string,
    #       "title": string,
    #       "picture_url": string,
    #     }
    #   ]
    # }
#     ```

### Get details of a movie

# * Endpoint path: /api/movies/{movie_id}
# * Endpoint method: GET

#   headers: {
#     'X-RapidAPI-Key': enum,
#     'X-RapidAPI-Host': string,
#   }

# Parameters
# params: {info: base_info | isAdult }

# * Response: Details of a movie
# * Response shape (JSON):
#     ```json
    #   {
    #       "movie_id": string,
    #       "title": string,
    #       "plot": string,
    #       "is_adult": boolean,
    #       "runtime": integer,
    #       "release_date": string,
    #       "picute_url": string,
    #       "rating": string
    #     }

#     ```

### Get saved movies

# * Endpoint path: /api/watchlist
# * Endpoint method: GET

# * Headers:
#   * Authorization: Bearer token

# * Response: A list of favorited movies by user
# * Response shape (JSON):
#     ```json
    # {
    #   "movies": [
    #     {
    #       "movie_id": string,
    #       "title": string,
    #       "picute_url": string,
    #       "rating": string,
    #       "has_watched": boolean,
    #       "account_username": string
    #     }
    #   ]
    # }
#     ```

### Add to user movie list

# * Endpoint path: /api/watchlist
# * Endpoint method: POST

# * Headers:
#   * Authorization: Bearer token

#  * Request shape (JSON):
    # {
    #   "account_username": string,
    #    "movie_id": string
    # }

# * Response: Details of the saved movie
# * Response shape (JSON):
#     ```json
    #     {
    #       "account_username": string
    #       "movie_id": string,
    #       "title": string,
    #       "plot": string,
    #       "is_adult": boolean,
    #       "runtime": integer,
    #       "release_date": string,
    #       "picute_url": string,
    #       "rating": string
    #       "has_watched": false
    #     }
#     ```

### Update has_watched field

# * Endpoint path: /api/watchlist/{movie_id}
# * Endpoint method: PUT

# * Headers:
#   * Authorization: Bearer token


# * Response: Details of the updated movie
# * Response shape (JSON):
#     ```json

    #   {
    #       "account_username": string
    #       "movie_id": string,
    #       "title": string,
    #       "plot": string,
    #       "is_adult": boolean,
    #       "runtime": integer,
    #       "release_date": string,
    #       "picute_url": string,
    #       "rating": string
    #       "has_watched": false
    #     }
    #
#     ```

### Delete movie from user movie list

# * Endpoint path: /api/watchlist/{movie_id}
# * Endpoint method: DELETE

# * Headers:
#   * Authorization: Bearer token

# * Response: Result of deletion
# * Response shape (JSON):
#     ```json
    # {
    #   "success": boolean
    # }
#     ```

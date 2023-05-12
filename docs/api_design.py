### Log in

# * Endpoint path: /token
# * Endpoint method: POST

# * Request shape (form):
#   * username: string
#   * password: string

# * Response: Account information and a token
# * Response shape (JSON):
#     ```json
#     {
#       "account": {
#         «key»: type»,
#       },
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

# * Response: A list of movies
# * Response shape (JSON):
#     ```json
    # {
    #   "movies": [
    #     {
    #       "movie_id": string,
    #       "title": string,
    #       "picture_url": string,
    #       "rating": string,
    #     }
    #   ]
    # }
#     ```

### Get details of a movie

# * Endpoint path: /api/movies/{movie_id}
# * Endpoint method: GET

# * Response: A list of movies
# * Response shape (JSON):
#     ```json
    # {
    #   "movies": [
    #     {
    #       "movie_id": string,
    #       "title": string,
    #       "plot": string,
    #       "is_adult": boolean,
    #       "runtime": integer,
    #       "release_date": string,
    #       "picute_url": string,
    #       "rating": string
    #     }
    #   ]
    # }
#     ```

### Get user movie list

# * Endpoint path: /api/username/movies
# * Endpoint method: GET

# * Headers:
#   * Authorization: Bearer token

# * Response: A list of movies saved by user
# * Response shape (JSON):
#     ```json
    # {
    #   "movies": [
    #     {
    #       "movie_id": string,
    #       "title": string,
    #       "picute_url": string,
    #       "rating": string,
    #       "has_watched": boolean
    #     }
    #   ]
    # }
#     ```

### Add to user movie list

# * Endpoint path: /api/username/movies
# * Endpoint method: POST

# * Headers:
#   * Authorization: Bearer token

#  * Request shape (JSON):
    # {
    #   * "movie_id": string
    # }

# * Response: Details of the saved movie
# * Response shape (JSON):
#     ```json
    # {
    #   "movies": [
    #     {
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
    #   ]
    # }
#     ```

### Update has_watched field

# * Endpoint path: /api/username/movies/{movie_id}
# * Endpoint method: PUT

# * Headers:
#   * Authorization: Bearer token


# * Response: Details of the updated movie
# * Response shape (JSON):
#     ```json
    # {
    #   "movies": [
    #     {
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
    #   ]
    # }
#     ```

### Delete movie from user movie list

# * Endpoint path: /api/username/movies/{movie_id}
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

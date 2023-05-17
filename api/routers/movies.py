from fastapi import (
    Depends,
    HTTPException,
    APIRouter,
)
from queries.movies import (
    MovieIn,
    MovieOut,
    MovieList,
    MovieQuery,
    InvalidID
)

router = APIRouter()

@router.get('/api/movies', response_model=MovieList)
def get_all_movies(
    repo: MovieQuery = Depends()
):
    return {
        "movies": repo.get_all()
    }

@router.get('/api/movies/{movie_id}', response_model=MovieOut)
def get_movie_details(
    movie_id: str,
    repo: MovieQuery = Depends()
):
    try:
        result = repo.get_one(movie_id)
    except InvalidID:
        raise HTTPException(status_code=404, details="Movie not found")
    return result

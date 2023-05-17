from fastapi import (
    Depends,
    HTTPException,
    APIRouter,
)
from queries.movies import (
    MovieIn,
    MovieOut,
    MovieList,
    MovieQuery
)

router = APIRouter()

@router.get('/api/movies', response_model=MovieList)
def get_all_movies(
    repo: MovieQuery = Depends()
):
    return {
        "movies": repo.get_all()
    }

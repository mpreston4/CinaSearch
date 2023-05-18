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
    repo: MovieQuery = Depends(),
    startYear: str = "1980",
    titleType: str = "movie",
    endYear: str = "2023",
    genre: str = "",
    page: str = "1",
    title: str = "",
):
    if title == "":
        return {
            "movies": repo.get_all(startYear, titleType, endYear, genre, page)
        }
    else:
        return {
            "movies": repo.get_all_by_title(title, page)
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

# @router.get('/api/', response_model=)

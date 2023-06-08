from fastapi import (
    Depends,
    HTTPException,
    APIRouter,
)
from queries.movies import MovieOut, MovieList, MovieQuery, InvalidID

router = APIRouter()


@router.get("/api/movies", response_model=MovieList)
def get_all_movies(
    repo: MovieQuery = Depends(),
    startYear: str = "1980",
    endYear: str = "2022",
    titleType: str = "movie",
    genre: str = "",
    title: str = "",
    page: int = 1,
    req_action: str = "",
    api_start_page: str = 0,
    api_end_page: str = 0,
    first_movie_index: int = -1,
    last_movie_index: int = -1,
):
    if title == "":
        return repo.get_all(
            startYear,
            titleType,
            endYear,
            genre,
            page,
            req_action,
            api_start_page,
            api_end_page,
            first_movie_index,
            last_movie_index,
        )
    else:
        return repo.get_all_by_title(
            title,
            page,
            req_action,
            api_start_page,
            api_end_page,
            first_movie_index,
            last_movie_index,
        )


@router.get("/api/movies/{movie_id}", response_model=MovieOut)
def get_movie_details(
    movie_id: str,
    repo: MovieQuery = Depends(),
):
    try:
        result = repo.get_one(movie_id)
    except InvalidID:
        raise HTTPException(status_code=404, details="Movie not found")
    return result

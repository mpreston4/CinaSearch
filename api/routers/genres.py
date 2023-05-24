from queries.genres import GenreList, GenreQuery
from fastapi import APIRouter, Depends

router = APIRouter()

@router.get('/api/genres', response_model = GenreList)
def get_all_genres(
    repo: GenreQuery = Depends(),

):
    return {
        "genres": repo.get_all_genres()
        }

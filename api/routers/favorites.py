from fastapi import (
    Depends,
    HTTPException,
    APIRouter,
    status
)
from queries.favorites import FavoriteOut, MovieIn, FavoriteList
from authenticator import authenticator
from queries.favorites import FavoritesQueries, DuplicateError

router = APIRouter()


@router.post("/api/favorites", response_model=FavoriteOut)
def create_favorite(
    favorite_in: MovieIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    try:
        favorite = queries.create(
            favorite_in,
            account_email=account_data["email"]
        )
    except DuplicateError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This movie is added to your favorite list already",
        )
    return favorite


@router.get("/api/favorites", response_model=FavoriteList)
def get_all_favorites(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return {"favorites": queries.get(account_email=account_data["email"])}


@router.put("/api/favorites/{movie_id}", response_model=FavoriteOut)
def update_favorite(
    movie_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return queries.update(movie_id, account_email=account_data["email"])


@router.delete("/api/favorites/{movie_id}", response_model=bool)
def delete_favorite(
    movie_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: FavoritesQueries = Depends(),
):
    return queries.delete(movie_id, account_email=account_data["email"])

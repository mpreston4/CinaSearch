from pydantic import BaseModel
from .movies import MovieIn
from typing import List
from .client import Queries


class DuplicateError(ValueError):
    pass


class FavoriteOut(MovieIn):
    account_email: str
    has_watched: bool


class FavoriteList(BaseModel):
    favorites: List[FavoriteOut]


class FavoritesQueries(Queries):
    COLLECTION = "favorites"

    def create(self, favorite_in: MovieIn, account_email: str):
        favorite = favorite_in.dict()
        favorite_list = self.get(account_email)
        for movie in favorite_list:
            movie = movie.dict()
            if movie["movie_id"] == favorite["movie_id"]:
                raise DuplicateError
        favorite["account_email"] = account_email
        favorite["has_watched"] = False
        self.collection.insert_one(favorite)
        return FavoriteOut(**favorite)

    def get(self, account_email: str):
        favorite_list = []
        for favorite in self.collection.find({"account_email": account_email}):
            favorite_list.append(FavoriteOut(**favorite))
        return favorite_list

    def update(self, movie_id: str, account_email: str):
        favorite = self.collection.find_one(
            {"movie_id": movie_id, "account_email": account_email}
        )
        if favorite["has_watched"] is False:
            favorite["has_watched"] = True
        else:
            favorite["has_watched"] = False

        self.collection.update_one(
            {
                "movie_id": movie_id,
                "account_email": account_email
            },
            {
                "$set": favorite
            }
        )
        return FavoriteOut(**favorite)

    def delete(self, movie_id: str, account_email: str):
        result = self.collection.delete_one(
            {"movie_id": movie_id, "account_email": account_email}
        )
        if result.deleted_count > 0:
            return True
        return False

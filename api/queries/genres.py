from pydantic import BaseModel
from typing import List
from .client import Queries
import requests
import os


class GenreList(BaseModel):
    genres: List[str]


class GenreQuery(Queries):
    def get_all_genres(self):
        MOVIES_DATABASE_API_KEY = os.environ.get("MOVIES_DATABASE_API_KEY", '')
        url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres'

        headers = {
            "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }
        response = requests.get(url, headers=headers)
        data = response.json()
        genre_list = []
        genres = data["results"]
        for genre in genres[1::]:
            genre_list.append(genre)
        genre_list.remove("Game-Show")
        genre_list.remove("Short")
        genre_list.remove("Music")
        genre_list.remove("News")
        genre_list.remove("Reality-TV")
        genre_list.remove("Talk-Show")
        genre_list.remove("Adult")
        genre_list.remove("Film-Noir")
        return genre_list

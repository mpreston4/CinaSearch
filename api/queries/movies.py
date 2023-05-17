from pydantic import BaseModel
from typing import List
from .client import Queries
from datetime import date
import requests

class DeleteStatus(BaseModel):
    success: bool

class MovieIn(BaseModel):
    movie_id: str
    title: str
    picture_url: str

class MovieOut(MovieIn):
    plot: str
    rating: str
    runtime: str
    is_adult: bool
    release_date: date

class MovieList(BaseModel):
    movies: List[MovieIn]

class MovieQuery(Queries):
    def get_all(self):
        url = "https://moviesdatabase.p.rapidapi.com/titles"

        querystring = {"info":"base_info"}

        headers = {
	        "X-RapidAPI-Key": "9df5a61190msh91aae33630a72aep1b97f8jsn8b130273cb76",
	        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        movie_list = []
        movies = data.results
        for movie in movies:
            d = {}
            d["movie_id"] = movie.id
            d["title"] = movie.titleText.text
            d["picture_url"] = movie.primaryImage.url
            movie_list.append(MovieIn(**d))
        return movie_list

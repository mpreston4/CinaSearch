from pydantic import BaseModel
from typing import List
from .client import Queries
import requests
from keys import MOVIES_DATABASE_API_KEY

class InvalidID(ValueError):
    pass

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
    release_year: str

class MovieList(BaseModel):
    movies: List[MovieIn]

class MovieQuery(Queries):
    def get_all(self):
        url = "https://moviesdatabase.p.rapidapi.com/titles"

        querystring = {
            "startYear":"1980",
            "titleType":"movie",
            "info":"base_info",
            "endYear":"2023"
            }

        headers = {
	        "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
	        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        movie_list = []
        while len(movie_list) < 200:
            movies = data["results"]
            for movie in movies:
                if movie["primaryImage"] is None:
                    continue
                d = {}
                d["movie_id"] = movie["id"]
                d["title"] = movie["titleText"]["text"]
                d["picture_url"] = movie["primaryImage"]["url"]
                movie_list.append(MovieIn(**d))
            next_page = data["next"]

            url = f"https://moviesdatabase.p.rapidapi.com{next_page}"

            headers = {
                "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
                "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
            }

            response = requests.get(url, headers=headers)
            data = response.json()
        return movie_list

    def get_one(self, movie_id:str):
        url = f"https://moviesdatabase.p.rapidapi.com/titles/{movie_id}"

        querystring = {"info": "base_info"}

        headers = {
	        "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
	        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        movie = data["results"]
        if data["results"] == None:
            raise InvalidID
        d = {}
        d["movie_id"] = movie["id"]
        d["title"] = movie["titleText"]["text"]
        d["picture_url"] = movie["primaryImage"]["url"]
        d["plot"] = movie["plot"]["plotText"]["plainText"]
        d["rating"] = movie["ratingsSummary"]["aggregateRating"]
        runtime = movie["runtime"]["seconds"]
        d["runtime"] = str(int(runtime) // 60)
        d["release_year"] = movie["releaseYear"]["year"]

        url = f"https://moviesdatabase.p.rapidapi.com/titles/{movie_id}"

        querystring = {"info": "isAdult"}

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        movie = data["results"]

        d["is_adult"] = movie["isAdult"]

        return MovieOut(**d)

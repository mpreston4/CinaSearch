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
    rating: str | None
    runtime: str
    # is_adult: bool
    release_year: str
    genres: List[str]

class MovieList(BaseModel):
    movies: List[MovieIn]

class MovieQuery(Queries):
    def list_ten(self, data, querystring, headers, url):
        movie_list = []
        count = 0
        if data["results"] == []:
            return movie_list
        else:
            while True:
                movies = data["results"]
                for movie in movies:
                    if movie["primaryImage"] is None or movie["runtime"] is None or movie["plot"] is None:
                        continue
                    d = {}
                    d["movie_id"] = movie["id"]
                    d["title"] = movie["titleText"]["text"]
                    d["picture_url"] = movie["primaryImage"]["url"]
                    movie_list.append(MovieIn(**d))
                    count += 1
                    if count == 10:
                        return movie_list
                if data["next"] is None:
                    return movie_list
                querystring["page"] = str(int(querystring["page"]) + 1)
                response = requests.get(url, headers=headers, params=querystring)
                data = response.json()

    def get_all(self, startYear: str, titleType: str, endYear: str, genre: str, page: str):
        url = "https://moviesdatabase.p.rapidapi.com/titles"

        querystring = {
            "startYear": startYear,
            "titleType": titleType,
            "info": "base_info",
            "endYear": endYear,
            "page": page,
            "list": "top_boxoffice_200",
        }

        if genre != "":
            querystring["genre"] = genre
            del querystring["list"]

        headers = {
	        "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
	        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()

        return self.list_ten(data, querystring, headers, url)

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
        d["genres"] = []
        if movie["genres"] is None:
            d["genres"].append("Not listed")
        else:
            for genre in movie["genres"]["genres"]:
                d["genres"].append(genre["text"])

        url = f"https://moviesdatabase.p.rapidapi.com/titles/{movie_id}"
        querystring = {"info": "isAdult"}

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        movie = data["results"]

        d["is_adult"] = movie["isAdult"]

        return MovieOut(**d)

    def get_all_by_title(self, title: str, page: str):
        url = f"https://moviesdatabase.p.rapidapi.com/titles/search/title/{title}"

        querystring = {"exact":"false","titleType":"movie","page": page, "info": "base_info"}

        headers = {
            "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        data = response.json()
        return self.list_ten(data, querystring, headers, url)

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
    release_year: str
    genres: List[str]

class MovieList(BaseModel):
    movies: List[MovieIn]
    current_page: int
    api_start_page: str | None
    api_end_page: str | None
    first_movie_index: int | None
    last_movie_index: int | None
    next: bool

class MovieQuery(Queries):
    def get_all(self, startYear: str, titleType: str, endYear: str, genre: str, page: int, req_action: str, api_start_page: str, api_end_page: str, first_movie_index: int, last_movie_index: int):


        url = "https://moviesdatabase.p.rapidapi.com/titles"

        querystring = {
            "startYear": startYear,
            "titleType": titleType,
            "info": "base_info",
            "endYear": endYear,
            "page": "1",
            "list": "top_boxoffice_200",
        }

        if genre != "":
            querystring["genre"] = genre
            del querystring["list"]

        if req_action == "":
            return self.first_ten(url, querystring)
        elif req_action == "next":
            querystring["page"] = api_end_page
            return self.next_ten(url, querystring, page, last_movie_index)
        elif req_action == "prev":
            querystring["page"] = api_start_page
            return self.prev_ten(url, querystring, page, first_movie_index)



    def first_ten(self, url, querystring):
        data = self.api_call(url, querystring)
        result = {
            "movies": [],
            "current_page": 1,
            "api_start_page": None,
            "api_end_page": None,
            "first_movie_index": None,
            "last_movie_index": None,
            "next": False,
        }
        count = 0
        if data["results"] == []:
            return result
        else:
            result["api_start_page"] = data["page"]
            while True:
                movies = data["results"]
                for movie in movies:
                    if movie["primaryImage"] is None or movie["runtime"] is None or movie["plot"] is None:
                        continue
                    d = {}
                    d["movie_id"] = movie["id"]
                    d["title"] = movie["titleText"]["text"]
                    d["picture_url"] = movie["primaryImage"]["url"]
                    result["movies"].append(MovieIn(**d))
                    if len(result["movies"]) == 1:
                        result["first_movie_index"] = data["results"].index(movie)
                    count += 1
                    if count == 9:
                        result["api_end_page"] = data["page"]
                        result["last_movie_index"] = data["results"].index(movie)
                        if data["next"]:
                            result["next"] = True
                        return result
                if data["next"] is None:
                    return result
                querystring["page"] = str(int(querystring["page"]) + 1)
                data = self.api_call(url, querystring)

    def next_ten(self, url, querystring, page, last_movie_index):
        if last_movie_index == 9:
            querystring["page"] = str(int(querystring["page"]) + 1)
            data = self.api_call(url, querystring)
            result = {
                "movies": [],
                "current_page": page + 1,
                "api_start_page": data["page"],
                "api_end_page": None,
                "first_movie_index": None,
                "last_movie_index": None,
                "next": False,
            }
            first_loop = False
        else:
            data = self.api_call(url, querystring)
            result = {
                "movies": [],
                "current_page": page + 1,
                "api_start_page": data["page"],
                "api_end_page": None,
                "first_movie_index": None,
                "last_movie_index": None,
                "next": False,
            }
            first_loop = True

        count = 0
        if data["results"] == []:
            return result
        else:
            while True:
                movies = data["results"]
                for i, movie in enumerate(movies):
                    if first_loop:
                        if i < last_movie_index + 1:
                            continue
                    if movie["primaryImage"] is None or movie["runtime"] is None or movie["plot"] is None:
                        continue
                    d = {}
                    d["movie_id"] = movie["id"]
                    d["title"] = movie["titleText"]["text"]
                    d["picture_url"] = movie["primaryImage"]["url"]
                    result["movies"].append(MovieIn(**d))
                    if len(result["movies"]) == 1:
                        result["first_movie_index"] = data["results"].index(movie)
                    count += 1
                    if count == 9:
                        result["api_end_page"] = data["page"]
                        result["last_movie_index"] = data["results"].index(movie)
                        if data["next"]:
                            result["next"] = True
                        return result
                if data["next"] is None:
                    return result
                querystring["page"] = str(int(querystring["page"]) + 1)
                data = self.api_call(url, querystring)
                first_loop = False

    def prev_ten(self, url, querystring, page, first_movie_index):
        if first_movie_index == 0:
            num = querystring["page"]
            querystring["page"] = str(int(querystring["page"]) - 1)
            data = self.api_call(url, querystring)
            result = {
                "movies": [],
                "current_page": page - 1,
                "api_start_page": None,
                "api_end_page": num,
                "first_movie_index": None,
                "last_movie_index": None,
                "next": True,
            }
            first_loop = False
        else:
            data = self.api_call(url, querystring)
            result = {
                "movies": [],
                "current_page": page - 1,
                "api_start_page": None,
                "api_end_page": data["page"],
                "first_movie_index": None,
                "last_movie_index": None,
                "next": True,
            }
            first_loop = True


        count = 0
        while True:
            movies = data["results"]
            upper_bound = 9
            if first_loop:
                upper_bound = first_movie_index - 1
            for index in range(upper_bound, -1, -1):
                print(movies)
                if movies[index]["primaryImage"] is None or movies[index]["runtime"] is None or movies[index]["plot"] is None:
                    continue
                d = {}
                d["movie_id"] = movies[index]["id"]
                d["title"] = movies[index]["titleText"]["text"]
                d["picture_url"] = movies[index]["primaryImage"]["url"]
                result["movies"].insert(0, MovieIn(**d))
                if len(result["movies"]) == 1:
                    result["last_movie_index"] = index
                count += 1
                if count == 9:
                    result["api_start_page"] = data["page"]
                    result["first_movie_index"] = index
                    if data["next"]:
                        result["next"] = True
                    return result
            querystring["page"] = str(int(querystring["page"]) - 1)
            data = self.api_call(url, querystring)
            first_loop = False



    def get_one(self, movie_id:str):
        url = f"https://moviesdatabase.p.rapidapi.com/titles/{movie_id}"

        querystring = {"info": "base_info"}

        data = self.api_call(url, querystring)

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

        return MovieOut(**d)

    def get_all_by_title(self, title: str, page: int, req_action: str, api_start_page: str, api_end_page: str, first_movie_index: int, last_movie_index: int):
        url = f"https://moviesdatabase.p.rapidapi.com/titles/search/title/{title}"

        querystring = {"exact":"false","titleType":"movie","page": "1", "info": "base_info", "startYear": "1980", "endYear": "2022"}

        if req_action == "":
            return self.first_ten(url, querystring)
        elif req_action == "next":
            querystring["page"] = api_end_page
            return self.next_ten(url, querystring, page, last_movie_index)
        elif req_action == "prev":
            querystring["page"] = api_start_page
            return self.prev_ten(url, querystring, page, first_movie_index)

    def api_call(self, url, querystring):
        headers = {
            "X-RapidAPI-Key": MOVIES_DATABASE_API_KEY,
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
        }
        response = requests.get(url, headers=headers, params=querystring)
        return response.json()

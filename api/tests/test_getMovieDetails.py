from fastapi.testclient import TestClient
from main import app
from queries.movies import MovieQuery

client = TestClient(app)


class FakeMovieQuery:
    def get_one(self, movie_id: str):
        return {
            "movie_id": movie_id,
            "title": "string",
            "picture_url": "string",
            "plot": "string",
            "rating": "string",
            "runtime": "string",
            "is_adult": True,
            "release_year": "string",
        }


def test_get_one():
    app.dependency_overrides[MovieQuery] = FakeMovieQuery

    response = client.get("/api/movies/movie1")
    data = response.json()

    assert response.status_code == 200
    assert data["movie_id"] == "movie1"

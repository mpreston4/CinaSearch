from fastapi.testclient import TestClient
from main import app
from queries.movies import MovieIn
from queries.favorites import FavoritesQueries
from authenticator import authenticator

client = TestClient(app)


class FakeFavoritesQueries:
    def create(self, favorite_in: MovieIn, account_email: str):
        return {
            "account_email": "string@example.com",
            "has_watched": "True",
            "movie_id": favorite_in.movie_id,
            "title": favorite_in.title,
            "picture_url": favorite_in.picture_url,
        }


def fake_get_current_account_data():
    return {"email": "string@example.com"}


def test_create_favorite():
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    favorite_in = {
        "movie_id": "12345",
        "title": "Test",
        "picture_url": "www.picture.com",
    }
    res = client.post("/api/favorites", json=favorite_in)
    data = res.json()

    assert res.status_code == 200
    assert data == {
        "account_email": "string@example.com",
        "has_watched": True,
        "movie_id": "12345",
        "title": "Test",
        "picture_url": "www.picture.com",
    }

    app.dependency_overrides = {}

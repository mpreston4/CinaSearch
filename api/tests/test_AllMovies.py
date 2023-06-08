from fastapi.testclient import TestClient
from queries.movies import MovieQuery
from main import app

client = TestClient(app)


class FakeMovieQuery:
    def get_all(
        self, startYear: str, titleType: str, endYear: str, genre: str, page: str
    ):
        return []


def test_get_all_movies():
    # Arrange
    app.dependency_overrides[MovieQuery] = FakeMovieQuery

    # Act
    response = client.get("/api/movies")
    data = response.json()

    # Assert
    assert response.status_code == 200
    assert data == {"movies": []}

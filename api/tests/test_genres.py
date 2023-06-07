from fastapi.testclient import TestClient
from queries.genres import GenreQuery
from main import app

client = TestClient(app)


class FakeGenreQuery():
    def get_all_genres(self):
        return []


def test_get_all_genres():
    # Arrange
    app.dependency_overrides[GenreQuery] = FakeGenreQuery

    # Act
    response = client.get("/api/genres")
    data = response.json()

    # Assert
    assert response.status_code == 200
    assert data == {"genres": []}

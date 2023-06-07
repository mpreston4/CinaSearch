from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesQueries
from authenticator import authenticator

client = TestClient(app)


class FakeFavoritesQueries:
    def get(self, account_email: str):
        return []


def fake_get_current_account_data():
    return {"email": "firstnamelastname@gmail.com"}


def test_get_favorites():
    # Arrange
    app.dependency_overrides[FavoritesQueries] = FakeFavoritesQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    # Act
    res = client.get("/api/favorites")
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert data == {"favorites": []}

    # Cleanup
    app.dependency_overrides = {}

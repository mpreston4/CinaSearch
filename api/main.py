from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import accounts, movies, favorites
import os


app = FastAPI()
app.include_router(authenticator.router, tags=["Login/Logout"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(movies.router, tags=["Movies"])
app.include_router(favorites.router, tags=["Favorites"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

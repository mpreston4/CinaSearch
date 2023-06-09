# CinaSearch

- Kekoa Kim https://gitlab.com/KekoaKim
- Mick Preston - https://gitlab.com/mpreston4
- David Dabov - https://gitlab.com/ddabov20
- Tristen Abella - https://gitlab.com/tristenabella
- Yinglin Hu - https://gitlab.com/Yinglin.Hu

## Design

- [API design](docs/api_design.py)
- [GHI](docs/CinaSearch_Wireframe.png)
- [Integration](docs/integration.md)

## Intended market

This application is designed for movie lovers who want to search for a movie to watch. Details about a movie will be displaying.

## Functionality

- Visitors to the site can search for a movie by two ways:
  - They can search by title and then they will be led to a list of movies that contain the title they search
  - They can search by a genre then they will be led to a list of movies of the specific genre they search for
- Once the search results display to the visitors, there is a next button to click to view more search results. If they want to go back to the previous page, there is also a previous button to do so
- Visitors can click on the picture of the movie on the homepage and the search results to see details about that movie
- There is also a "favorite" button in the detail of a movie that a visitor can click which will redirect them to the login page
- Login users can easily favorite/unfavorite a movie by clicking the star button on the top left of the picture of a movie
- Login users to the site can favorite/unfavorite movies into their wishlists
- Login users can also add/delete movies to their watchedlists with the finished/haven't finished buttons

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create a .env file on the base-level 
4. Add SIGNING_KEY: and MOVIES_DATABASE_API_KEY: 
5. To get your SIGNING_KEY run openssl rand -hex 32 in your terminal
6. To get your MOVIES_DATABASE_API_KEY go to https://rapidapi.com/SAdrian/api/moviesdatabase/  and subscribe
7. Run `docker volume create movies-data`
8. Run `docker compose build`
9. Run `docker compose up`
10. Explore CinaSearch

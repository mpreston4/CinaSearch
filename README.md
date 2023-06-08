# CinaSearch

- Kekoa Kim
- Mick Preston
- David Dabov
- Tristen Abella
- Yinglin Hu

## Design

- [API design](docs/api_design.py)
- [GHI](docs/wireframe.png)
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
3. Run `docker volume create movies-data`
4. Run `docker compose build`
5. Run `docker compose up`
6. Explore CinaSearch

## How to complete the initial deploy

There will be further guidance on completing the initial
deployment, but it just consists of these steps:

### Setup GitLab repo/project

- make sure this project is in a group. If it isn't, stop
  now and move it to a GitLab group
- remove the fork relationship: In GitLab go to:

  Settings -> General -> Advanced -> Remove fork relationship

- add these GitLab CI/CD variables:
  - PUBLIC_URL : this is your gitlab pages URL
  - SAMPLE_SERVICE_API_HOST: enter "blank" for now

#### Your GitLab pages URL

You can't find this in GitLab until after you've done a deploy
but you can figure it out yourself from your GitLab project URL.

If this is your project URL

https://gitlab.com/GROUP_NAME/PROJECT_NAME

then your GitLab pages URL will be

https://GROUP_NAME.gitlab.io/PROJECT_NAME

### Initialize CapRover

1. Attain IP address and domain from an instructor
1. Follow the steps in the CD Cookbook in Learn.

### Update GitLab CI/CD variables

Copy the service URL for your CapRover service and then paste
that into the value for the SAMPLE_SERVICE_API_HOST CI/CD variable
in GitLab.

### Deploy it

Merge a change into main to kick off the initial deploy. Once the build pipeline
finishes you should be able to see an "under construction" page on your GitLab
pages site.

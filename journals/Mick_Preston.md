Week 13:

Day 1 (05/08/2023)

    Today, we were introduced to our teammates. We discussed several different ideas that we could possibly incorporate into our app. Some of the ideas were:

    -Tutor App: where users can log on, view different tutors available, and schedule appointments with the tutor. Additionally, the users would be able to filter by school subject to only see available tutors for the area of study desired. Additional filters could be applied as stretch goals.
    -Music Game App: This idea would essentially be a game. Different users on the app would be able to log on, and view the same screen. The game would ask a question…something like “What song best fits this phrase/topic : my girlfriend just broke up with me (example topic)”. Then each user would submit a song, and a 30 second clip of the song would play. At the end of all of the songs being played, each user would rank the songs. They would not know which user picked which song. Then the winner would be the person with the most votes.
    -Hiking App: The idea for this app was to have users keep track of hikes they’ve been on. This might sound familiar as it’s inspired from All trails. The app would also give them good hiking suggestions based on a search they perform.
    -Movies App: For our movie app idea, we would like to incorporate a survey into our app. A user can get onto the app, fill out a survey, and after completion they are given a short list of movie suggestions. Additionally, the user will be permitted to search for movies using a search feature, and then add that movie to their list. This allows them to track their own movies in a “wishlist” page. As they progress through their movies, they will be able to update the list, or delete movies from the list.

    We’ve chosen Movies as our App idea. We’ve even started putting together a rough wireframe and some api calls on insomnia.

    We’ve also chosen an API website (rapidapi.com) to use for our 3rd party resource.

Day 2 (05/09/2023)

    Today our group got together and started looking at possible 3rd API endpoints we could incorporate into our app. We’ve chosen the movie app idea as the app we are going to create. We’ve narrowed down the 3rd party apis into a couple options: MoviesDatabase and MoviesMiniMovies. They both have pros and cons.

    MoviesDatabase

    Pros: There are over 9 million movies to search from. The database allows us to make unlimited calls for free. It’s very easy to get a large list of movies using one api call.
    Cons: only allows you to retrieve certain details after making an api call. It appears as if we cannot retrieve details showing the description or synopsis of the movie. Additionally, we do not see much detail providing rating, content rating, etc.

    MiniMoviesDatabase:

    Pros: you can make unlimited calls. You can get back very good details on a particular movie easily.
    Cons: There’s only a few thousand movies on this database compared to millions on MoviesDatabase.

    Conclusion regarding 3rd party apis, let’s use both databases in conjunction with one another. We will use MiniMovies to get the details, and MoviesDatabase to get a list of movies.

    Wireframing: We continued on this, and added some additional details

Day 3 (05/10/2023)

    Today, our group found out and changed plans on one major thing. We are only going to use one database. After talking to instructors, and doing some thinking on our own, it’s not a good idea to use multiple databases for 3rd party api calls. What if a user takes the survey, gets thrown a suggestion on a few movies they could watch. After looking through the list, they want to find out more about a particular movie, so they click on that movie to go to the details page. Well, that’s hitting up another database. What if that movie doesn’t exist on this database? It wouldn’t be ideal.

    We’ve decided to go with one database (MiniMoviesDatabase). We made this decision because this database allows us to still get a list of movies if we search by genre, and will also give us more details on each movie. We think this will be much easier to implement rather than having two separate databases for 3rd party api calls.

    Wireframing, we added in even more detail to our wireframes. We added what the login, signup, survey, home, list, survey results, search results, and detail pages will look like. We added pictures, buttons, page features, examples, etc into our wireframe. We also changed our questions to match api calls, so we can easily refine the search after a user completes the survey.

Day 4 (05/11/2023)

    We made a big change today. After further investigation, we realized that we can get much more details than we thought we could on the particular movie with MoviesDatabase. With that in mind, we’re going to change the choice of 3rd party apis. We’re going to choose MoviesDatabase because there are over 9 million movies on here. We simply just have to add additional parameters to the search, which is listed as “optional” as a parameter so we didn’t think to use this before.

    This is very nice because we, and the user, will have that many more movies to choose from. With this in mind, we re-worked some of our api endpoints, and responses. We also changed our wireframing slightly to match the slight change of data that we have available to show on the “movie details page”.

Day 5 (05/12/2023)

    Today our group continued working on our api endpoints and responses. We finished them out, and as of now we have 9 total endpoints that we’ve constructed to allow the different features to operate. As of now, our endpoints are completed, but we need additional information on what type of data to include in the endpoints, headers, and responses for login/signup pages. A user is going to have to be given a token for their login session. We will learn more on how to incorporate that next week.

    We made minor tweaks on our wireframe to give the user the option to change the has_watched field on their “wishlist” page. This will be a PUT method on the request. Additionally, we completed the api calls, and their corresponding responses.

    Our team also completed the Issues that we will create on gitlab next week. We also set up a group repository on gitlab by forking the provided gitlab repo from the instructors. We pushed our wireframe, api calls, and issues to the notes page on gitlab.




Week 14:

Day 1 (05/15/2023)

    Today our group worked on the authentication portion of our movies project. We used the JWTdown library to build an authenticator. We had to create a routers and queries folder. They both had account files within them. One acted as a router for creating a new account, the other one acted as the communicator to the mongo db (accounts file in queries) to create a new account. The other file we added was the authenticator which validates the account with an associated token that’s given to the user when they log in. We’ve completed the authentication process.

Day 2 (05/16/2023)

    Today our group cleaned up some merge conflicts we had in our docker-compose.yaml file and main.py file. We also corrected the create and get method within our AccountQueries in our queries.accounts.py folder. We had to add in a .pop method to remove the password property on the return statement when a new account is created. We also adjusted our api request body/response body statements in our api folder. With the information we have now about account creation, logging in, and logging out we were able to correct some of the apis.

Day 3 (05/17/2023)

    Today our team worked on our routes and queries for our 3rd party movies file. We successfully built these routes and were able to hit our movie api to get a response back in a list format. We also added an endpoint to allow us to get the movie details by movie id. Once we were done with this, we started working on our movie favorites routes.

Day 4 (05/18/2023)

    Today our team built the rest of our favorite movie routes. Now, if a user is logged in, they can create, get all, update, or delete movies on their favorites page. This will allow the user to keep track of their favorites as they’re looking at different movies on our site. We noticed that we didn’t have a get movie by title endpoint, which we will need for our search bar, so we added that to our movies queries and router files as well.




Week 15:


Day 1 (05/22/2023)

    Today our team caught up on some redux lectures and videos. We did not have a great chance to look at the redux videos over the weekend, so we were all a little bit behind on this topic. Additionally, it was our first time seeing Redux, so we re-watched Riley’s lecture on the topic to better enforce these topics.

Day 2 (05/23/2023)

    Today our group started front end. We had to install the redux toolkit into our application. We also needed “react-router-dom” installed so we did that as well. From this point, we were able to start building on our front end. We simply wanted to get something up and running at first, so we built a movies list page to display a simple list of movies. We also built a “store” and “moviesApiSlice” file to handle the api call, and retrieve the data from the backend. Additionally, we set up the index.js and nav.js file to properly route our pages. Once those files were wired up, we successfully got a list of movies, and displayed them on our page.

    From that point, we worked on setting up front end auth, so we added those api calls to our moviesApiSlice file to retrieve account information and assign a user to a token. From that point, we were able to hide or show certain nav links to a user on the front end based on their account token information.

Day 3 (05/24/2023)

    Today our team built a login page. We built this in, and upon successful completion, the user will be redirected to our homepage. We also added another api call on the backend. We added a genres call to hit our 3rd party api and retrieve a list of all the different movie genres we want to display on our site. Lastly, our index and app files were not set up properly, so we corrected the code and got our routes to properly function. As it stands, we have a home page, movies list page, and login page. They are very basic pages, but the functionality is working properly.

Day 4 (05/25/2023)

    Today our team worked on the integration of a movie card and a carousel feature for our movies list page. This took quite a bit of time to get things working properly. We were able to successfully implement the cards onto the homepage, but we have some styling work to do to make it look nice.

Day 5 (05/26/2023)

    Today, our group worked on a few things. The first thing we did was write some test cases for some of our routes. I personally worked on the movie details route, to make sure the route properly works. After all of us completed the tests, we worked on a search feature on the home page. We added two things: a search by genre search bar and a search by title search bar. We were able to properly route the request once a user fills out the search bar. Once the search is entered, a 3rd party call is made, and parameters are added to the api call based on what the user inputs.




Week 16:

Day 1 (05/30/2023)

    Today, our group split up and worked on two issues. One issue was the movie detail page, and the other one was a signup page. After a day's work, we successfully completed both of these issues.

Day 2 (05/31/2023)

    Today our group merged the movie detail view into main. We resolved some issues with the movie detail layout. Another thing we worked on was our favorite/unfavorite page. We got this mostly up and running to the point where we can see a movie's favorite list. We started attempting the process of updating the “has_watched” field, so the user can track which movies they’ve already watched. We will have to pick up on this tomorrow. We added a create, delete, and update movie favorite api splice functions.

Day 3 (06/01/2023)

    Today our group re-formatted the favorites list page. We made it match the movies list page that the user sees after they search for a movie (columns of movie cards). We also adjusted the favorite button. We made it so the favorite button would properly post/delete movies to the favorites that are tied to the logged in user. We also finished the has_watched button. Essentially, if a user updates the has watch field, it will be “posted” to their “my watched movies” page by using a filter to the movie favorites on the front end. Finally, we added a basic error page.

Day 4 (06/02/2023)

    Today, we fixed a bug we had on the favorite/unfavorite button. We also updated the api design for our backend calls, and we fixed an error on the search by title if no genres are listed on the response body. We added an if statement on the back end to account for this. We also added a favorite star button that will show up on the movie card when the user is logged in. Finally, we started styling the Nav bar better.




Week 17:

Day 1 (06/05/2023)

    Today our group worked on styling the favorites page. We made it so the buttons for the favorites page only show up when the user clicks on the movie image and brings up the movie modal. We also updated the nav bar to match user experience based on links that they would click on. We also added some styling to the homepage and error page. Lastly, we updated the wireframe.

Day 2 (06/06/2023)

    Today, our group worked on building in some error handling for user login and signup. We created a back end call to grab a list of all the account usernames. Then, when the user goes to the signup page, the call is made. After the call is made, we were able to see whether or not the user plugged in a username that was unique, or one that already existed. If it already exists, the user will get an alert when they try to submit the form. On the login page, we made it so the user is notified when they try to submit the form with the incorrect password. We also added a background image and centered the login and signup forms.

Day 3 (06/07/2023)

    Today, our group worked on a lot of styling. We added some style to the login page and error page. We also completed “pagination” to the point where now the user can hit the next button on a list page to view the next page of list results from the API. Lastly, we ran flake8 and cleaned up a lot of code.

Day 4 (06/08/2023)

    Today our group started wrapping up the documentation. We all added to the readme file to give instructions to other people that want to pull our project and view it. We also fixed up some code on the front end, fixed the wireframe, and fixed the api docs.

Day 5 (06/09/2023)

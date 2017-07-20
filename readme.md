The goal of this application is to match testers based on user search criteria. Users have the option to search for testers by both device and country. The search results returned are ranked in order by the amount of bugs a tester filed for a given device (if provided as a search parameter).

### Technologies used
* Node
* Express
* jQuery
* Bootstrap (minimally)
* Postgresql
* Knex

### Instructions
* After forking and cloning the repo, you should run `npm install` to
install all dependencies.
* Next, you should make sure that you have psql running on your machine and run the `create_db` script in the `scripts` folder.
* Finally, you should runn the `upload_all` script in the `scripts` folder in order to seed the database.
* After all these steps have been completed, simply run `npm start` in order to view the app on `localhost:4000`

Coding Challenge Readme
---------------------------

[Coding Challenge Guidelines](ChallengeInstructions.md)

To view app you can either head to: [https://solarcity-challenge.herokuapp.com/](https://solarcity-challenge.herokuapp.com/)

Or you can also run locally by following these steps:
1. Clone the repo to your computer
2. Run the command `npm install`
3. Run the command `node index.js`
4. Go to `localhost:3000`


# Description
The main problem here is to record interest in SolarCity from potential customers. This data can then later be used by a sales team to close the deal.

The SolarCity Interest app is a simple application that aims to solve this problem by recoding a potential customer's information and reason for interest in SolarCity in a database.

To use the website, a user can enter their info and once the user submits, the info is recorded in a database.

To view the information from the database from the app, you can supply a user's name and address.


# Backend Track
Since I chose the backend track, the app has a very minimalistic front end. The backend has two main ways to interact with it.

1.  Post user information to the database.
2.  Get user information (specifically the user's reason for interest) by supplying the user's name and address.

# Technical Choices
For this app I decided to build the backend using Node.js. I have a decent amount of experience using Node.js in my various side projects. The main reason I wanted to use node was because it is very easy to get started on a simple app.

One downside to node is that the code can become quite messy and there are often a lot of packages that are used. However, in this case since the app was very small, the code stayed relatively clean and had few dependencies.

The frontend unfortunately is very lacking since I was pressed on time due to school work. If I were to build a fully fleshed out frontend I probably would have used React since I have experience with React and really enjoy working with components.

For the database I used mongodb as it works very well with a node backend. Additionally, the main downsides of a non-relational databse which include messy structure of the data did not matter here since I was storing a very limited amount of data.

For hosting the application, I chose heroku and for hosting the mongodb database I used mlab, a free service built using AWS.

# Other Projects
One project I am currently working on with a partner is called snipped. 
* It was built originally using ruby on rails and then rebuilt with node to help improve performance.

* The application works by sumarizing youtube video lectures by scraping the captions and finding key concepts in the video using various APIs. We then link the user to where those key concepts are discussed in the video. This essentially allows the user to focus on parts of the lecture that are important.

* The repo is private for now since we used the project in a course but a demo of the app working can be found here:
[https://www.youtube.com/watch?v=EQgRBcTpr-o](https://www.youtube.com/watch?v=EQgRBcTpr-o)

Another project I built some time back is called twitgar.

* It is an app that visualizes tweets related to a query in a fun way.

* It's currently hosted and can be accessed by going to: [http://twitgar.xyz](http://twitgar.xyz)

* The code is stored at: [https://github.com/rahul444/twitgar](https://github.com/rahul444/twitgar)

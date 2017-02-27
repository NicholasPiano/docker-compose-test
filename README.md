# Web Developer Test

## Prerequisites

- [Docker Compose 1.8.1][docker-compose]

## Getting Started

Once you have Docker Compose installed navigate to the root of this project's directory and run the following command.

```shell
docker-compose up
```

After the required container images are downloaded and built you should see three services start and begin logging their output.

### Services

#### App
A simple [AngularJS][angular-docs] web application written in [ES2015][es2015], transpiled through [Babel][babel] and served through using [Webpack][webpack] and [Webpack Dev Server][webpack-dev-server] at http://localhost:8080 by default (can be overridden through environment variables in `.env`).

As changes are made to the source files in `./app/src` the application should automatically compile and reload in browser to reflect your changes.

#### API
A simple Node.js RESTful API that makes use of the [Restify][restify] framework and the [MongoDB Node.js Driver][mongodb-nodejs-driver].

The API is accessible via `webpack-dev-server` hosting the App through the `/api/` path (http://localhost:8080/api/).

As changes are made to the source files in `./api/src` the API should automatically restart to reflect your changes.

#### Database (DB)
A MongoDB instance with its data written to the mounted path `./db/data` so it persists between runs.

## The Test

Please spend no longer than 2 hours on this test it is fine if you do not complete all the tasks they are just to provide a basis for discussion if you are invited for a face-to-face interview.

If you have any questions before beginning this test please feel free to contact me via [joshb@speechmatics.com](mailto:joshb@speechmatics.com)

### Tasks

The web application has the ability to add a contact through a form with a single input field (First name).

Currently you have to reload the application in order to see new contacts reflected in your contacts list.

- Add the ability to add a contact with the following fields some of which are required (marked with \*).
  - First name *
  - Last name *
  - Email address *
  - Photo
  - Company
  - Job title
  - Phone number
  - Birthday
  - Address
  - Notes
- Add validation for these fields and provide user feedback when necessary.
- Add the ability to edit an existing contact.
- Add the ability to delete an existing contact.
- Add a way to search your contacts.
- Add a way to export your contacts.
- Add a way to import your contacts.
- Style the user interface to make it more aesthetically pleasing.

## Submission

As you work on the project please make use of Git to record your progress.

When submitting your work push your Git repository somewhere we can access it such as GitHub or Bitbucket, or zip the repository and send it to us as an attachment.

[angular-docs]:          https://docs.angularjs.org/
[babel]:                 https://babeljs.io/
[docker-compose]:        https://docs.docker.com/compose/install/
[es2015]:                https://babeljs.io/learn-es2015/
[mongodb-nodejs-driver]: http://mongodb.github.io/node-mongodb-native/2.2/
[restify]:               http://restify.com/
[webpack-dev-server]:    https://webpack.github.io/docs/webpack-dev-server.html
[webpack]:               https://webpack.github.io/
[github]:                https://github.com/
[bitbucket]:             https://bitbucket.org/

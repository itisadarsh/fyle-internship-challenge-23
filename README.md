# GitHub Repositories Listing SPA

This is an Angular 16+ single-page application (SPA) that allows users to search for a GitHub username and view the public repositories belonging to that user.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Setup](#setup)
5. [Running the Application](#running-the-application)
6. [Running Unit Tests](#running-unit-tests)
7. [Deployment](#deployment)
8. [Contact](#contact)

## Introduction

This application was developed as part of the Fyle Internship Challenge. It provides a user-friendly interface for searching GitHub usernames and viewing their public repositories.

## Features

- Search for GitHub usernames
- View public repositories of the searched user
- Pagination for repositories
- Display repository topics and languages
- Error handling for invalid usernames or failed API requests

## Requirements

To run this application, you need to have the following installed:

- Node.js
- Angular CLI
- Git (for cloning the repository)

## Setup

1. Clone the repository to your local machine:

```bash
git clone [https://github.com/itisadarsh/fyle-internship-challenge-23.git]
Navigate to the project directory:

cd [fyle-internship-challenge-23]
Install dependencies:


npm install
Running the Application
To run the application locally, use the following command:


ng serve
This will start a development server, and you can access the application at http://localhost:4200 in your web browser.

Running Unit Tests
To run the unit tests for the application, use the following command:


ng test
This will execute the unit tests and provide the test results in the terminal.

Deployment
The application can be deployed to any cloud service of your choice. Before deployment, make sure to build the project using the following command:


ng build --prod
This will generate the production-ready files in the dist directory, which can be deployed to a hosting service.

```
## Service APIs Functionality

### ApiService
#One Thing to remember that api are cached so after one call to same person again unit test will fail to fetch the data as the data is stored in localstorage
The `ApiService` provides methods for interacting with the GitHub API to fetch user details, repositories, and languages.

#### `getUser(githubUsername: string)`

This method fetches user details for the given GitHub username.

- **Parameters**:
  - `githubUsername`: The GitHub username of the user to fetch details for.
  
- **Return Value**: An Observable emitting user details in the form of an object.

#### `getRepos(githubUsername: string, per_page: number, curr_page: number)`

This method fetches repositories for the given GitHub username, with support for pagination.

- **Parameters**:
  - `githubUsername`: The GitHub username of the user whose repositories to fetch.
  - `per_page`: The number of repositories per page.
  - `curr_page`: The current page number.

- **Return Value**: An Observable emitting an array of repository objects.

#### `getLanguages(githubUsername: string, project: string)`

This method fetches languages for the given GitHub project.

- **Parameters**:
  - `githubUsername`: The GitHub username of the owner of the project.
  - `project`: The name of the GitHub project.

- **Return Value**: An Observable emitting an array of language strings used in the project.

Repositiory-list Component Functionality
Component Creation:

Description: Verifies that the RepositoryListComponent is successfully created.
Expected Outcome: The test passes if the component instance is truthy, indicating that the component is successfully created.
Displaying Loader when Info is Not Fetched:

Description: Tests whether the loader component is displayed when the info_fetched flag is false, indicating that information is not yet fetched.
Expected Outcome: The test passes if the loader component is found in the DOM when info_fetched is false.
Displaying Languages when Info is Fetched:

Description: Tests whether the languages are displayed when info_fetched is true and language data is provided.
Expected Outcome: The test passes if language elements are displayed with the correct data when info_fetched is true and languages are provided.
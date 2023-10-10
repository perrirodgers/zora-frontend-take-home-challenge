# React Redux Test Assessment Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description

This is a test assessment project built with React and Redux. The purpose of this project is to evaluate your understanding of these technologies and your ability to create a functional web application using them.

This Project is a Simple ReactJS Project with redux store which demonstrates the following

1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using Bootstrap along with React
5. Using Basic Routing in React
6. Using redux for state management
7. Using axios for api calls
8. Displaying dynamic images with using unsplash
9. Search & filter features demonstration
10. Pagination demonstration

The project Template can be used to build bigger projects

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/avinash-react-assessment-2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-redux-assessment
   ```

3. Install the project dependencies using npm:

   ```bash
   npm i
   ```

### Running the Application

Once you have installed the project dependencies, you can start the development server:

```bash
npm start
```

This command will start the development server, and the application will be available at `http://localhost:3000` in your web browser.

## Available Scripts

In the project directory, you can run:

### `npm i`

Install the project dependencies. Run this command to set up the required packages before starting the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

The Application Runs on **localhost:3000**

## Project Structure

The project structure is organized as follows:

```
react-test-assessment/
  ├──public
  |
  ├── src/
  │   ├── common/
  │   │      ├── store/
  │   │      │     ├──actions/
  │   │      │     │        ├──action-types.js
  │   │      │     │         ├──photos-actions.js
  │   │      │     ├──reducers/
  │   │      │     │      ├──photo-reducers.js
  │   │      │     ├──apiConstants.js
  │   │      │     ├──apiServices.js
  │   │      │     ├──root-reducer.js
  │   │      ├── pagination-view.js
  │   │
  │   ├── components/
  │   │       ├──home-view.js
  │   │       ├──index.js
  │   │       ├──photo-view.js
  │   │       ├──searchBar.js
  │   ├──static/
  │   │       ├──css
  │   │           ├──my-css.css
  │   │
  │   ├── App.js
  │   ├── index.js
  ├── package.json
  ├── README.md
```

## Application design

#### Components

1. **Home-View** Component : This Component displays a dynamic images list. This Component gets the data from a api call from unsplash server using axios

2. **Photo-View** Component : This Component Displays the list of the images. This Component gets its parent component from home file. This Component is the Child Component of _Home-View_ Component

3. **SearchBar** Component : This component used to search query for displaying images. This Component gets its parent component from home file. This Component is the Child Component of _Home-View_ Component

## Usage

You can modify and extend this project to complete the test assessment according to the instructions provided.

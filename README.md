# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Specifications

### Main Page

- The main page shows three shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors. Each bookshelf is a reusable component.

- The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.

- When the browser is refreshed, the same information is displayed on the page.

### Search Page

- The search page has a search input field.

- The search page behaves correctly:
  a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors. You can use throttle/debounce but are not required to do so.
  b) Search results are not shown when all of the text is deleted out of the search input box.
  c) Invalid queries are handled and prior search results are not shown.
  d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography"). (It's fine to filter out books with missing thumbnails.)
  e) The user is able to search for multiple words, such as “artificial intelligence.”

- Search results on the search page allow the user to select “Currently Reading”, “Want to Read”, or “Read” to place the book in a certain shelf.

If a book is assigned to a shelf on the main page and that book also appears on the search page, the correct shelf should be selected for that book on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.

- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

### Routing

- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search. Routing is implemented with React Router

- The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /. Routing is implemented with React Router

### Code Functionality

- Component state is passed down from parent components to child components. The state variable is not modified directly - the useState hook is used to add to function component.

Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.

- Components in the application are built as functions rather than as classes.

- The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items, or state update warnings on unmounted components.. All code is functional and formatted properly.

## To go further

- Consider adding a books "detail" page to display more information about any particular book
- Consider adding sign-up and log-in functionality to allow users to save their bookshelves to their accounts
- Consider adding drag-and-drop functionality to move books between shelves

# React Content Listing

Content listing page [`live application`](https://lijovijayan.github.io/diagnal-web).

Developed the mobile browser version of content listing page using  `ReactJS` with `Redux` for state
management.

---

## Requirements

### Functional Requirements
* App must implement lazy loading of contents - image grid must load gradually as the user scrolls down. Data for the first page can be loaded during
app load.
* Client Side Search must be implemented via Redux state management. Search results must be rendered on to the main view itself without
refreshing/reloading the page or taking the user to a new page.
* Virtual DOM Rendering to be closely monitored to ensure only relevant components are getting re-rendered during state changes.
* The listing page must have three vertically scrollable columns which is not horizontally scrollable with no visible scroll bars.

---

## Built With

Major frameworks and libraries used to bootstrap the project.

* [React.js](https://reactjs.org/)
* [Tailwind CSS](tailwindcss.com)
* [React Redux](https://react-redux.js.org/)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)

---

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/lijovijayan/diagnal-web.git
   ```
2. Install packages
   ```sh
   yarn install
   ```

---

## Features Impemented

- Search box to search contents on the page
- Lazy loading feature to load content page by page without breaking search functionaity
- State management with React Redux with Redux Thunk middleware for asynchronous execution
- Responsive UI powered by tailwind CSS library
- Implemented image lazy loading with IntersectionObserver API
- Added css transitions to provide rich user interaction

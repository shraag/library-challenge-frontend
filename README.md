# Library Management System Frontend

This repository contains the frontend code for the Library Management System. The application allows users to sign up, log in, view available books, and manage their borrowed books. It also includes functionalities for librarians to manage books and view members.

## Project Structure
```
/ (root)
├── html/
│   ├── books.html
│   ├── member_available.html
│   ├── member_books.html
│   ├── member_navbar.html
│   ├── members.html
│   └── navbar.html
├── index.html
├── signup.html
├── js/
│   └── functions.js
└── README.md
```

### HTML Files

- **index.html**: The main entry point for the application. It contains the login form and links to the signup page.
- **signup.html**: The signup page where new users can create an account.
- **html/books.html**: The page for librarians to manage books.
- **html/member_available.html**: The page for members to view available books.
- **html/member_books.html**: The page for members to view their borrowed books.
- **html/members.html**: The page for librarians to view and manage members.
- **html/navbar.html**: The common navigation bar included in various librarian pages.
- **html/member_navbar.html**: The navigation bar specific to member pages.

### JavaScript Files

- **js/functions.js**: Contains the core JavaScript functions for user authentication, fetching books, fetching members, and deleting books etc.

## Flow of the Application

### User Authentication

1. **Login**: Users log in through the form in `index.html`. The `loginUser` function in [`js/functions.js`](js/functions.js) handles the login process by sending a POST request to the backend API.
2. **Signup**: New users can sign up through the form in `signup.html`. The form includes fields for first name, last name, username, password, and role. The form submission is handled by an inline script that validates the password and sends a POST request to the backend API.

### Navigation

- The navigation bars (`navbar.html` and `member_navbar.html`) are dynamically loaded into the pages using the Fetch API. This ensures a consistent navigation experience across different pages.

### Book Management

1. **View Available Books**: Members can view available books on `html/member_available.html`. The `fetchAvailableBooks` function in [`js/functions.js`](js/functions.js) fetches the list of available books from the backend API.
2. **View Borrowed Books**: Members can view their borrowed books on `html/member_books.html`. The `fetchBorrowedBooks` function in [`js/functions.js`](js/functions.js) fetches the list of borrowed books from the backend API.
3. **Manage Books**: Librarians can manage books on `html/books.html`. The `fetchBooks` function in [`js/functions.js`](js/functions.js) fetches the list of books, and the `deleteBook` function handles book deletion.

### Member Management

- Librarians can view members on `html/members.html`. The `fetchMembers` function in [`js/functions.js`](js/functions.js) fetches the list of members from the backend API.

## Dependencies

- **Bootstrap**: Used for styling and responsive design.
- **jQuery**: Used for DOM manipulation and AJAX requests.
- **Popper.js**: Used for positioning tooltips and popovers.
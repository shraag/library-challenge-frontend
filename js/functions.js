async function loginUser(username, password) {
    const url =
      'https://shranay08.pythonanywhere.com/api/auth/login'; // Replace with your Python server URL
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  
    const data = await response.json();
    console.log(data.access_token);
    if (data && data.access_token) {
      document.cookie = `access_token=${data.access_token}; max-age=${
        365 * 24 * 60 * 60
      }; path=/`;
  
      if (data.user_role === 'LIBRARIAN') {
        window.location.href = './html/books.html';
        return true;
      }
  
      window.location.href = './html/member_books.html';
    }
  
    return true;
  }
  
  function logout() {
    document.cookie = 'access_token=; Max-Age=0; path=/;';
    window.location.href = '/library-challenge-frontend//index.html';
  }
  
  async function fetchBooks() {
    const url =
      'https://shranay08.pythonanywhere.com/api/librarian/books';
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  }
  
  async function fetchMembers() {
    const url =
      'https://shranay08.pythonanywhere.com/api/librarian/view_members';
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  }
  
  async function deleteBook(bookId) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/delete_book`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ book_id: bookId }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error deleting book:', errorData);
      throw new Error('Failed to delete book');
    }
  
    const data = await response.json();
    console.log('Book deleted successfully:', data);
    return data;
  }
  
  async function addBook(title, author, published_year) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/add_book`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ title, author, published_year }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error adding book:', errorData);
      throw new Error('Failed to add book');
    }
  
    const data = await response.json();
    console.log('Book added successfully:', data);
    return data;
  }
  
  async function updateBook(bookId, title, author, published_year) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/update_book`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ title, author, published_year, book_id: bookId }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error updating book:', errorData);
      throw new Error('Failed to update book');
    }
  
    const data = await response.json();
    console.log('Book updated successfully:', data);
    return data;
  }
  
  async function addMember(
    first_name,
    last_name,
    username,
    password,
    role = 'MEMBER'
  ) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/add_member`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ first_name, last_name, username, password, role }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error adding member:', errorData);
      throw new Error('Failed to add member');
    }
  
    const data = await response.json();
    console.log('Member added successfully:', data);
    return data;
  }
  
  async function updateMember(memberId, first_name, last_name, username) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/update_member`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({
        member_id: memberId,
        first_name,
        last_name,
        username,
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error updating member:', errorData);
      throw new Error('Failed to update member');
    }
  
    const data = await response.json();
    console.log('Member updated successfully:', data);
    return data;
  }
  
  async function deleteMember(memberId) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/delete_member`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ member_id: memberId }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error changing member status:', errorData);
      throw new Error('Failed to change member status');
    }
  
    const data = await response.json();
    console.log('Member status changed successfully:', data);
    return data;
  }
  
  async function fetchMemberHistory(memberId) {
    const url = `https://shranay08.pythonanywhere.com/api/librarian/member_history?member_id=${memberId}`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching member history:', errorData);
      throw new Error('Failed to fetch member history');
    }
  
    const data = await response.json();
    console.log('Member history fetched successfully:', data);
    return data;
  }
  
  
  async function fetchBorrowedBooks() {
    const url = 'https://shranay08.pythonanywhere.com/api/member/books_borrowed';
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching borrowed books:', errorData);
      throw new Error('Failed to fetch borrowed books');
    }
  
    const data = await response.json();
    console.log('Borrowed books fetched successfully:', data);
    return data;
  }
  
  async function returnBook(bookId) {
    const url = `https://shranay08.pythonanywhere.com/api/member/return_book`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ book_id: bookId })
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error returning book:', errorData);
      throw new Error('Failed to return book');
    }
  
    const data = await response.json();
    console.log('Book returned successfully:', data);
    return data;
  }
  
  async function fetchAvailableBooks() {
    const url = 'https://shranay08.pythonanywhere.com/api/member/available_books';
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching available books:', errorData);
      throw new Error('Failed to fetch available books');
    }
  
    const data = await response.json();
    console.log('Available books fetched successfully:', data);
    return data;
  }
  
  async function borrowBook(bookId) {
    const url = `https://shranay08.pythonanywhere.com/api/member/borrow_book`;
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '69420',
      },
      body: JSON.stringify({ book_id: bookId })
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error borrowing book:', errorData);
      throw new Error('Failed to borrow book');
    }
  
    const data = await response.json();
    console.log('Book borrowed successfully:', data);
    return data;
  }
  
  async function deleteAccount() {
    const url = 'https://shranay08.pythonanywhere.com/api/member/delete_account';
  
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    const accessToken = cookies['access_token'];
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'ngrok-skip-browser-warning': '69420',
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error deleting account:', errorData);
        throw new Error('Failed to delete account');
      }
  
      const data = await response.json();
      console.log('Account deleted successfully:', data);
  
      // Clear the access token cookie and redirect to the index page
      document.cookie = 'access_token=; Max-Age=0; path=/;';
      window.location.href = '/library-challenge-frontend/index.html';
    } catch (error) {
      console.error('Failed to delete account:', error);
      displayError('Failed to delete account: Please return all the books');
    }
  }
  
  function displayError(message) {
    const errorContainer = document.getElementById('error-container');
    if (errorContainer) {
      errorContainer.innerText = message;
      errorContainer.style.display = 'block';
    } else {
      const newErrorContainer = document.createElement('div');
      newErrorContainer.id = 'error-container';
      newErrorContainer.className = 'alert alert-danger';
      newErrorContainer.innerText = message;
      document.body.prepend(newErrorContainer);
    }
  }
  
  async function signup(firstName, lastName, username, password, role) {
    const url = 'https://shranay08.pythonanywhere.com/api/auth/signup';
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        role: role,
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error signing up:', errorData);
      throw new Error('Failed to sign up');
    }
  
    const data = await response.json();
    console.log('Signup successful:', data);
    return data;
  }
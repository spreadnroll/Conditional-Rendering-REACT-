import React from 'react';

export function MyUncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      session: formData.get('session') === 'on',
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My Uncontrolled Form</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" />
      </div>
      <div>
        <label htmlFor="session">Session</label>
        <input name="session" type="checkbox" id="session" />
      </div>
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
import React, { useState } from 'react';
import { Container } from './Container';
import { Welcome } from './Welcome';
import { MyUncontrolledLogin } from './MyUncontrolledLogin';
import { Link, Route, Routes } from 'react-router-dom';
import { Catalogue } from './Catalogue';
import { Product } from './Product';
import { Counter } from './Counter';
import { GithubUser } from './GithubUser';
import { ShowGithubUser } from './ShowGithubUser';
import { GithubUserList } from './GithubUserList';

export function App() {
  const [language, setLanguage] = useState('en');

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select onChange={handleSetLanguage} value={language}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>

      <Container
        title={
          <div>
            <h1>My Awesome App</h1>
            <div>
              <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/counter">Counter</Link> |  <Link to="/users">Users</Link> | <Link to="/users/spreadnroll">User</Link>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/products" element={<Catalogue />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
          <Route path="*" element={
            <div>
              <p>Not Found</p>
              <Link to="/">Back</Link>
            </div>
          } />
        </Routes>
      </Container>
    </div>
  );
}

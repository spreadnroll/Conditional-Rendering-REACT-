import React from 'react';
import { useGithubUsers } from './useGithubUsers';

export function GithubUsers() {
  const { users, error, isLoading, onRefresh } = useGithubUsers();

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error occurred: {error.message}</h3>}
      {users && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

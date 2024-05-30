import React from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

export function GithubUser({ username }) {
  const { data, error, isLoading } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>An error occurred: {error.message}</h3>;

  return (
    <div>
      {data && (
        <div>
          <h2>{data.login}</h2>
          <p>{data.bio}</p>
        </div>
      )}
    </div>
  );
}
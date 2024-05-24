import { useGithubUser } from "./useGithubUser";
import React from "react";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error: {error.message}</h1>}
      {data && (
        <div>
          <h1>{data.name}, {data.login}</h1>
          <img src={data.avatar_url} alt="Avatar User" />
        </div>
      )}
    </div>
  );
}
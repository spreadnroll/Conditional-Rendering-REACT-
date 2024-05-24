import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found!");
      }
      const json = await response.json();
      console.log(json);

      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

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
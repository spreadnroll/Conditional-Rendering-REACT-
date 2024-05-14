export function Welcome({ name, age }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      {age > 18 && <p>Your age is {age}!</p>}
      {age ? <p>Your age is {age}!</p> : null}
      {age > 18 && age < 65 && <p>Your age is {age}!</p>}
      {age > 18 && age < 65 && name === "John" && <p>Your age is {age}!</p>}
    </div>
  )
}

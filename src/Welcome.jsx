export function Welcome({ name, age }) {
const WelcomeStyle = {
  backgroundColor: 'greenyellow',
  color: '#333',
}

  return (
    <div style={WelcomeStyle}>
      <h2>Welcome, {name}!</h2>
      {age > 18 && <p>Your age is {age}!</p>}
      {age ? <p>Your age is {age}!</p> : null}
      {age > 18 && age < 65 && <p>Your age is {age}!</p>}
      {age > 18 && age < 65 && name === "John" && <p>Your age is {age}!</p>}
      {age > 18 && age ? <p>Your age is {age}!</p> : <p>You are very young!</p>}
    </div>
  )
}

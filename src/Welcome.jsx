import { Link, useNavigate, useParams } from "react-router-dom";

export function Welcome() {
  const WelcomeStyle = {
    backgroundColor: 'greenyellow',
    color: '#333',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const { name = 'Fabio' } = useParams();
  const navigate = useNavigate();

  function handleLoginButtonClick() {
    navigate('/login');
  }

  return (
    <div style={WelcomeStyle}>
      <h2>Welcome, {name}</h2>
      <div>
        <button onClick={handleLoginButtonClick}>Enter the App</button>
      </div>
    </div>
  );
}

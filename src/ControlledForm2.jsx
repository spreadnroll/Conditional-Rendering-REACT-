import { useEffect, useRef, useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export function ControlledForm2() {
  const [data, setData] = useState(createData);

  const mountedRef = useRef(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again for debug purpose");
    }

    inputRef.current?.focus();
  }, []);

  function handlerInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((prevData) => {
      const updated = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
      return updated;
    });
  }

  function handleResetForm() {
    setData(createData);
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log("Login button pressed", data);
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Controlled Form - 2</h1>
      <input
        ref={inputRef}
        name="username"
        value={data.username}
        onChange={handlerInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handlerInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handlerInputChange}
      />
      <button onClick={handleResetForm}>Reset</button>
      <button disabled={!data.username || !data.password}>Login</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}

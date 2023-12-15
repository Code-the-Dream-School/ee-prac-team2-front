import { useState } from "react";

const Login = ({ loginUser }) => {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(currentUser);
    loginUser(currentUser);
    setTimeout(() => {
      setCurrentUser({
        email: "",
        password: "",
      }),
        2000;
    });
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={currentUser.email}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={currentUser.password}
          onChange={handleInputChange}
        ></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;

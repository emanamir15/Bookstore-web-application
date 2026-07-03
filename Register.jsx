import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registration successful!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="container">
      <h1>Register as New User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        /><br/><br/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

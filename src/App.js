import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Blog!</h1>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };
  
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration successful!");
  };
  
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

function Blog() {
  const posts = [
    { id: 1, title: "React Basics", content: "React is a JavaScript library for building user interfaces." },
    { id: 2, title: "React Router", content: "React Router helps in navigation between components." },
  ];
  return (
    <div>
      <h2>Blog</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

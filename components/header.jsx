import "../CSS/header.css";

const HeaderComponent = () => {
  return (
    <div className="header">
      <h1 className="logo">The Thinking Cortex</h1>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderComponent;
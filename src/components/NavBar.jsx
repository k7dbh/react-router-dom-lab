import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginBottom: "2rem" }}>
      <Link to="/"> Home </Link> 
      <Link to="/mailboxes"> Mailboxes</Link> 
      <Link to="/new-mailbox"> New Mailbox</Link>
    </nav>
  );
}

export default NavBar;
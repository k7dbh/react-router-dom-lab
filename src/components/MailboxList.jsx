import { Link } from "react-router-dom";
import "./MailboxList.css"; 

function MailboxList({ mailboxes }) {
  return (
    <main>
      <h2>Mailboxes</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {mailboxes.length === 0 && <p>No mailboxes yet.</p>}
        {mailboxes.map((box) => (
          <Link
            to={`/mailboxes/${box._id}`}
            key={box._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="mail-box">{box._id}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default MailboxList;
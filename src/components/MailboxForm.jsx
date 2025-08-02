import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MailboxForm({ addBox }) {
  const [form, setForm] = useState({ boxholder: "", boxSize: "Small" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addBox(form);
    navigate("/mailboxes");
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<input name="boxholder"
            value={form.boxholder}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Box Size: <select name="boxSize" value={form.boxSize} onChange={handleChange}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>
        <br />
        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  );
}

export default MailboxForm;
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import "./App.css"; 


function App() {
  const [mailboxes, setMailboxes] = useState([]);

  function addBox({ boxholder, boxSize }) {
    const newBox = {
      _id: mailboxes.length + 1,
      boxholder,
      boxSize,
    };
    setMailboxes([...mailboxes, newBox]);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
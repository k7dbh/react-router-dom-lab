import { useParams } from "react-router-dom";

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const box = mailboxes.find((mb) => mb._id === Number(mailboxId));

  return (
    <main>
      <h2>Mailbox # {box._id}</h2>
      <p>
        <strong>Boxholder: </strong> {box.boxholder}
      </p>
      <p>
        <strong>Box Size: </strong> {box.boxSize}
      </p>
    </main>
  );
}

export default MailboxDetails;
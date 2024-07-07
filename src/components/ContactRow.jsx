
function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)} className="contact-list">
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  )
}

export default ContactRow

/*
  1. add a button to each row for a description
  2. create a new component for the indepth description
  3.
*/
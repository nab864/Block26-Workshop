import { useState, useEffect } from "react"

function SelectedContact({ selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState(null)

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const result = await response.json()
        console.log('SelectedContact')
        console.log(result)
        setContact(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchContact()
  }, [])
  if (contact) {
    return (
      <>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Full Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ID</th>
            <td colSpan={2}>{contact.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td colSpan={2}>{contact.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td colSpan={2}>{contact.email}</td>
          </tr>
          <tr>
            <th rowSpan={4}>Address</th>
            <td>Unit</td>
            <td>{contact.address.suite}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{contact.address.street}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{contact.address.city}</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td>{contact.address.zipcode}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td colSpan={2}>{contact.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td colSpan={2}>{contact.website}</td>
          </tr>
          <tr>
            <th rowSpan={3}>Company</th>
            <td>Company Name</td>
            <td>{contact.company.name}</td>
          </tr>
          <tr>
            <td>Catch Phrase</td>
            <td>{contact.company.catchPhrase}</td>
          </tr>
          <tr>
            <td>bs</td>
            <td>{contact.company.bs}</td>
          </tr>
          <tr>
            <button onClick={() => setSelectedContactId(null)}>Return</button>
          </tr>
        </tbody>
      </table>
      </>
    )
  }
}

export default SelectedContact
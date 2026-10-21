import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import ContactItem from '../components/ContactItem'
import { getText } from '../i18n/i18n'

export default function Contacts({ lang }) {
  let [contacts, setContacts] = useState([])
  let [showForm, setShowForm] = useState(false)
  let [search, setSearch] = useState('')
  let [editingContact, setEditingContact] = useState(null)

  function saveContact(contact) {
    if (editingContact) {
      let newContacts = contacts.map(item => {
        if (item.id === editingContact.id) {
          return { ...contact, id: item.id }
        }
        return item
      })
      setContacts(newContacts)
    } else {
      let newContact = { ...contact, id: Date.now() }
      setContacts([...contacts, newContact])
    }

    setShowForm(false)
    setEditingContact(null)
  }

  function deleteContact(id) {
    let newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  let filtered = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="contacts-page">
      <input
        className="search-input"
        placeholder={getText('search', lang)}
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button className="add-btn" onClick={() => {
        setEditingContact(null)
        setShowForm(true)
      }}>
        {getText('add', lang)}
      </button>

      <div className="contacts-list">
        {filtered.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            lang={lang}
            on_delete={() => deleteContact(contact.id)}
            on_edit={() => {
              setEditingContact(contact)
              setShowForm(true)
            }}
          />
        ))}
      </div>

      {showForm && (
        <ContactForm
          lang={lang}
          on_save={saveContact}
          initial_contact={editingContact}
          on_close={() => {
            setShowForm(false)
            setEditingContact(null)
          }}
        />
      )}
    </div>
  )
}
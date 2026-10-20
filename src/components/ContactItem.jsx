import { getText } from '../i18n/i18n'

export default function ContactItem({ contact, lang, on_delete, on_edit }) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <h3>{contact.name}</h3>
        {contact.phone && <p className="contact-detail">{contact.phone}</p>}
        {contact.email && <p className="contact-detail">{contact.email}</p>}
        {contact.note && <p className="contact-detail">{contact.note}</p>}
      </div>
      <div className="contact-buttons">
        <button className="edit-btn" onClick={on_edit}>{getText('edit', lang)}</button>
        <button className="delete-btn" onClick={on_delete}>{getText('delete', lang)}</button>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { getText } from '../i18n/i18n'

export default function ContactForm({ lang, on_save, initial_contact, on_close }) {
  let [form, setForm] = useState({ name: '', phone: '', email: '', note: '' })

  useEffect(() => {
    if (initial_contact) {
      setForm({
        name: initial_contact.name || '',
        phone: initial_contact.phone || '',
        email: initial_contact.email || '',
        note: initial_contact.note || ''
      })
      return
    }
    setForm({ name: '', phone: '', email: '', note: '' })
  }, [initial_contact])

  function updateField(field, value) {
    let newForm = { ...form }
    newForm[field] = value
    setForm(newForm)
  }

  function handleSave() {
    if (!form.name) {
      alert(getText('fill_name', lang))
      return
    }
    on_save(form)
  }

  let title = getText('add', lang)
  if (initial_contact) {
    title = getText('edit', lang)
  }

  return (
    <div className="modal-overlay">
      <div className="form-card">
        <h2>{title}</h2>
        <input placeholder={getText('name', lang)} value={form.name} onChange={event => updateField('name', event.target.value)} />
        <input placeholder={getText('phone', lang)} value={form.phone} onChange={event => updateField('phone', event.target.value)} />
        <input placeholder={getText('email', lang)} value={form.email} onChange={event => updateField('email', event.target.value)} />
        <input placeholder={getText('note', lang)} value={form.note} onChange={event => updateField('note', event.target.value)} />
        <div className="form-buttons">
          <button className="save-btn" onClick={handleSave}>{getText('save', lang)}</button>
          <button className="cancel-btn" onClick={on_close}>{getText('cancel', lang)}</button>
        </div>
      </div>
    </div>
  )
}

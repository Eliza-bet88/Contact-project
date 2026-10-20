import { getText } from '../i18n/i18n'

export default function Contacts({ lang }) {
  return (
    <div className="contacts-page">
      <input className="search-input" placeholder={getText('search', lang)} />
      <button className="add-btn">{getText('add', lang)}</button>
      <div className="contacts-list">
        <div className="contact-item">example</div>
      </div>
    </div>
  )
}
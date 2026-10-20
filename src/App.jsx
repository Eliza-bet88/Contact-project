import { useState } from 'react'
import Contacts from './pages/Contacts'
import { getText } from './i18n/i18n'

export default function App() {
  const [lang, setLang] = useState('en')

  return (
    <main className="app">
      <header>
        <div className="lang">
          <button type="button" onClick={() => setLang('en')}>EN</button>
          <button type="button" onClick={() => setLang('lv')}>LV</button>
        </div>

        <div className="header-title">
          <h1>{getText('title', lang)}</h1>
        </div>
      </header>

      <Contacts lang={lang} />
    </main>
  )
}

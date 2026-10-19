function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="language-buttons">
          <button type="button">EN</button>
          <button type="button">LV</button>
        </div>
        <h1>CONTACT APP</h1>
      </header>

      <section className="contacts-page">
        <div className="actions">
          <button className="add-btn" type="button">
            ADD CONTACT
          </button>
        </div>

        <div className="contacts-list"></div>
      </section>
    </main>
  )
}

export default App

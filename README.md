# Contact App

Web application for usser personal contact management.

**:** [contacts.eikwick.id.lv](https://contacts.eikwick.id.lv)

## Why This Project Is Relevant

People often need a quick way to keep names, phone numbers, email addresses, and notes in one place. This application demonstrates the workflow of a contact manager: creating, finding, updating, and removing contact records through a responsive web interface.

## Features

- Add a contact with a name, phone number, email address, and note
- Edit an existing contact
- Delete a contact
- Search contacts by name
- Switch the interface language between English and Latvian
- Validate that a contact name is entered before saving

## Technologies

- React
- Vite
- JavaScript and JSX
- CSS
- Cloudflare Tunnel for the public demo URL

## Project Structure

```text
src/
├── components/
│   ├── ContactForm.jsx   # Add and edit contact form
│   └── ContactItem.jsx   # A single contact card
├── i18n/
│   └── i18n.js           # English and Latvian translations
├── pages/
│   └── Contacts.jsx      # Contact list and contact actions
├── styles/
│   └── App.css           # Application styles
└── App.jsx               # Main application component
```

## Run Locally

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL:
`http://localhost:5173`.


## Testing

The following manual test cases were completed:

- **Add contact:** Enter a name and optional contact details, then select **Save**. A new contact card appears in the list.

- **Required name validation:** Leave the name field empty and select **Save**. A validation message is shown and the contact is not saved.

- **Search:** Enter part of a contact name in the search field. Only contacts with matching names are displayed.

- **Edit contact:** Select **Edit**, change a field, and save. The selected contact displays the updated information.

- **Delete contact:** Select **Delete** on a contact card. The selected contact is removed from the list.

- **Language switch:** Select **EN** or **LV** in the header. Interface labels switch to the selected language.


## Current Limitation

Contacts are currently stored only in the application's state. Refreshing the page clears the list. A future improvement would be saving contacts in `localStorage` or connecting the application to a backend database.

## Team Contribution


- **Jelizaveta Strapcāne:**
  - Created the React project with Vite and set up the main project structure.
  - Created the `components` folder:
   `ContactForm.jsx` displays the form for adding and editing contacts and checks that a name is entered.
   `ContactItem.jsx` displays one contact and its Edit and Delete buttons.
  - Created `i18n/i18n.js`, which contains all English and Latvian interface translations.


- **Marija Tvauri:**
  - Created the `pages` folder and `pages/Contacts.jsx`.
  - Implemented the contact list, adding, editing, deleting, and searching contacts in `Contacts.jsx`.
  - Created the `styles` folder and `styles/App.css`.
  - Added the visual design and layout for the header, buttons, contact cards, search field, and contact form.
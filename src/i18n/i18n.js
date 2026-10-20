const translations = {
  en: {
    title: 'CONTACT APP',
    add: 'ADD CONTACT',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    search: 'Search by name',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    note: 'Note',
    fill_name: 'Enter a name'
  },
  lv: {
    title: 'KONTAKTU LIETOTNE',
    add: 'PIEVIENOT KONTAKTU',
    save: 'Saglabāt',
    cancel: 'Atcelt',
    delete: 'Dzēst',
    edit: 'Rediģēt',
    search: 'Meklēt pēc vārda',
    name: 'Vārds',
    phone: 'Telefons',
    email: 'E-pasts',
    note: 'Piezīme',
    fill_name: 'Ievadiet vārdu'
  }
}

export function getText(key, lang = 'en') {
  return translations[lang]?.[key] || key
}

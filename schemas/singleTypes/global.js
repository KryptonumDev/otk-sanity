export default {
  name: 'global',
	title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
      group: 'general',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      group: 'general',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook Link',
      group: 'general',
    },
    {
      name: 'youtube',
      type: 'string',
      title: 'YouTube Link',
      group: 'general',
    },
    {
      name: 'nav',
      type: 'global_Nav',
      title: 'Nawigacja',
      group: 'nav',
    },
    {
      name: 'footer',
      type: 'global_Footer',
      title: 'Stopka',
      group: 'footer',
    },
    {
      name: 'ebook',
      type: 'global_Ebook',
      title: 'Zapisz się i pobierz ebook',
      group: 'ebook',
    },
    {
      name: 'info',
      type: 'global_Info',
      title: 'Informacje o firmie',
      group: 'info',
    },
  ],
  groups: [
    {
      name: 'general',
      title: 'Ogólne',
    },
    {
      name: 'nav',
      title: 'Nawigacja',
    },
    {
      name: 'footer',
      title: 'Stopka',
    },
    {
      name: 'ebook',
      title: 'Zapisz się i pobierz ebook',
    },
    {
      name: 'info',
      title: 'Informacje o firmie',
    }
  ]
}

export const global_Footer = {
  name: 'global_Footer',
	title: 'Stopka',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
    },
    {
      name: 'paragraph',
      type: 'string',
      title: 'Paragraf',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
  ]
}

export const global_Nav = {
  name: 'global_Nav',
	title: 'Nawigacja',
  type: 'object',
  fields: [
    {
      name: 'workingHours',
      type: 'string',
      title: 'Godziny otwarcia',
    },
  ]
}

export const global_Ebook = {
  name: 'global_Ebook',
	title: 'Zapisz się i pobierz ebook',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
    },
    {
      name: 'formCta',
      type: 'string',
      title: 'Tekst Przcisku Formularza',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
    },
  ]
}

export const global_Info = {
  name: 'global_Info',
	title: 'Informacje o firmie',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'markdown'
        }
      ],
      title: 'Lista',
    },
    {
      name: 'map',
      type: 'geopoint',
      title: 'Mapa',
    },
  ]
}
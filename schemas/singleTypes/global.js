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
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
    },
    {
      name: 'facebook',
      type: 'string',
      title: 'Facebook Link',
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram Link',
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter Link',
    },
    {
      name: 'nav',
      type: 'global_Nav',
      title: 'Nawigacja'
    },
    {
      name: 'footer',
      type: 'global_Footer',
      title: 'Stopka'
    },
  ],
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
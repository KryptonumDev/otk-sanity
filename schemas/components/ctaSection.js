export default {
  name: "ctaSection",
  title: "Sekcja z wezwaniem do działania",
  type: "object",
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
      title: 'Tekst',
    },
    {
      name: 'cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      title: 'Wezwanie do działania',
    },
    {
      name: 'icons',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      title: 'Ikony',
      validation: Rule => Rule.max(2),
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'theme'
    },
  }
}
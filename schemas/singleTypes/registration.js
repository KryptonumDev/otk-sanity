export default {
  name: 'registration',
	title: 'Zapisy',
  type: 'document',
  icon: () => '📨',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Hero Nagłówek',
      group: 'hero',
    },
    {
      name: 'hero_Subheading',
      type: 'markdown',
      title: 'Hero Podnagłówek',
      group: 'hero',
    },
    {
      name: 'hero_Img',
      type: 'image',
      title: 'Hero Zdjęcie',
      group: 'hero',
    },
    {
      name: 'services_Heading',
      type: 'markdown',
      title: 'Usługi - Nagłówek',
      group: 'services',
    },
    {
      name: 'services_Paragraph',
      type: 'markdown',
      title: 'Usługi - Paragraf',
      group: 'services',
    },
    {
      name: 'services_List',
      type: 'array',
      of: [
        {
          type: 'imageAndTitle'
        }
      ],
      title: 'Lista Usług',
      group: 'services',
    },
    {
      name: 'services_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Usługi - Cta',
      group: 'services',
    },
    {
      name: 'ctaSection',
      type: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
      group: 'ctaSection',
    },
    {
      name: 'faqSection',
      type: 'faqSection',
      title: 'Sekcja z FAQ',
      group: 'faq',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  groups: [
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'services',
      title: 'Usługi',
    },
    {
      name: 'ctaSection',
      title: 'Sekcja z wezwaniem do działania',
    },
    {
      name: 'faq',
      title: 'Sekcja z FAQ',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}
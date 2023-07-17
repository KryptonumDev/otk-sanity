export default {
  name: 'familyClinic',
	title: 'Poradnia medycyny rodzinnej',
  type: 'document',
  icon: () => '👨‍👩‍👧',
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
      name: 'benefits',
      type: 'array',
      of: [
        {
          type: 'imageAndTitle'
        }
      ],
      title: 'Benefity kafelki',
      group: 'benefits',
    },
    {
      name: 'mission_Heading',
      type: 'markdown',
      title: 'Nasza misja - Nagłowek',
      group: 'mission',
    },
    {
      name: 'mission_Subheading',
      type: 'markdown',
      title: 'Nasza misja - Podnagłówek',
      group: 'mission',
    },
    {
      name: 'mission_Paragraph',
      type: 'markdown',
      title: 'Nasza misja - Paragraf',
      group: 'mission',
    },
    {
      name: 'mission_Cta',
      type: 'array',
      of: [
        {
          type: 'cta'
        }
      ],
      validation: Rule => Rule.max(2),
      title: 'Nasza misja - Cta',
      group: 'mission',
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
      name: 'benefits',
      title: 'Benefity',
    },
    {
      name: 'mission',
      title: 'Nasza misja',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ]
}
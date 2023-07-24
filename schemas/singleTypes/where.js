import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'where',
	title: 'Gdzie zrobić badania?',
  type: 'document',
  icon: () => '🧭',
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
      name: 'examination_Heading',
      type: 'markdown',
      title: 'Badania - Nagłówek',
      group: 'examination',
    },
    {
      name: 'examination_Paragraph',
      type: 'markdown',
      title: 'Badania - Paragraf',
      group: 'examination',
    },
    {
      name: 'examination_Img',
      type: 'image',
      title: 'Badania - Ikona',
      group: 'examination',
    },
    {
      name: 'facility_List',
      type: 'array',
      of: [
        { type: 'where_Facility_List' }
      ],
      title: 'Placówki',
      group: 'facility',
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
      name: 'examination',
      title: 'Regularne badania',
    },
    {
      name: 'facility',
      title: 'Placówki',
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

export const where_Facility_List = {
  name: "where_Facility_List",
  title: "Placówki",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Ikona',
    },
    {
      name: 'title',
      type: 'markdown',
      title: 'Tytuł',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Opis',
    },
    {
      name: 'cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'Wezwanie do działania',
      validation: Rule => Rule.max(2),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media,
      }
    }
  }
}
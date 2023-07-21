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
      name: 'registration_Heading',
      type: 'markdown',
      title: 'Rejestracja - Nagłowek',
      group: 'registration',
    },
    {
      name: 'registration_Paragraph',
      type: 'markdown',
      title: 'Rejestracja - Paragraf',
      group: 'registration',
    },
    {
      name: 'registration_Has_Title',
      type: 'markdown',
      title: 'Rejestracja - Mam Konto - Tytuł',
      group: 'registration',
      fieldset: 'registration_Has'
    },
    {
      name: 'registration_Has_Paragraph',
      type: 'markdown',
      title: 'Rejestracja - Mam Konto - Paragraf',
      group: 'registration',
      fieldset: 'registration_Has'
    },
    {
      name: 'registration_Has_Cta',
      type: 'array',
      of: [
        { type: 'cta' }
      ],
      title: 'Rejestracja - Mam Konto - Wezwanie do działania',
      group: 'registration',
      fieldset: 'registration_Has'
    },
    {
      name: 'registration_HasNot_Title',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Tytuł',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_Heading',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Nagłowek',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_Subheading',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Podnagłowek',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_Paragraph',
      type: 'markdown',
      title: 'Rejestracja - Nie Mam Konta - Paragraf',
      group: 'registration',
      fieldset: 'registration_HasNot'
    },
    {
      name: 'registration_HasNot_List',
      type: 'array',
      of: [
        { type: 'imageAndDescription' }
      ],
      title: 'Rejestracja - Nie Mam Konta - Lista',
      group: 'registration',
      fieldset: 'registration_HasNot'
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
      name: 'registration',
      title: 'Rejestracja',
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
  ],
  fieldsets: [
    {
      name: 'registration_Has',
      title: 'Mam konto',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'registration_HasNot',
      title: 'Nie mam konta',
      options: { collapsible: true, collapsed: true },
    }
  ],
}
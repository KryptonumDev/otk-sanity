import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'staff',
	title: 'Personel',
  type: 'document',
  icon: () => '👩‍⚕️',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    },
    {
      name: 'name',
      type: 'markdown',
      title: 'Imię',
    },
    {
      name: 'position',
      type: 'markdown',
      title: 'Stanowisko',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'markdown'
        }
      ],
      title: 'List punktów',
    },
    {
      name: 'bio',
      type: 'markdown',
      title: 'Biogram - opis',
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer'
    },
    prepare({ title, subtitle }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}
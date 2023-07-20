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
      name: 'bio',
      type: 'markdown',
      title: 'Biogram - opis',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'img'
    },
    prepare({ title, subtitle, media }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media
      }
    }
  }
}
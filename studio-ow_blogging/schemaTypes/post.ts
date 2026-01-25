import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      description: 'Court résumé de l\'article (affiché dans la liste)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Dr. Omar Wahab',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texte alternatif',
          description: 'Important pour l\'accessibilité et le SEO',
        },
      ],
      description: 'Cliquez sur l\'image après l\'upload pour définir le point focal (hotspot) et ajuster le cadrage',
    }),
    defineField({
      name: 'imageFormat',
      title: 'Format d\'affichage de l\'image',
      type: 'string',
      options: {
        list: [
          {title: 'Paysage (16:9)', value: 'landscape'},
          {title: 'Portrait (4:3)', value: 'portrait'},
          {title: 'Carré (1:1)', value: 'square'},
          {title: 'Bannière large (21:9)', value: 'banner'},
        ],
        layout: 'radio',
      },
      initialValue: 'landscape',
      description: 'Choisissez le format d\'affichage de l\'image principale',
    }),
    defineField({
      name: 'imageSize',
      title: 'Taille de l\'image',
      type: 'string',
      options: {
        list: [
          {title: 'Pleine largeur', value: 'full'},
          {title: 'Grande (80%)', value: 'large'},
          {title: 'Moyenne (60%)', value: 'medium'},
          {title: 'Petite (40%)', value: 'small'},
        ],
        layout: 'radio',
      },
      initialValue: 'full',
      description: 'Choisissez la taille de l\'image sur la page',
    }),
    defineField({
      name: 'imageAlignment',
      title: 'Alignement de l\'image',
      type: 'string',
      options: {
        list: [
          {title: 'Centrée', value: 'center'},
          {title: 'Gauche', value: 'left'},
          {title: 'Droite', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'center',
      description: 'Choisissez l\'alignement de l\'image (uniquement pour les tailles petite, moyenne et grande)',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Actualités', value: 'actualites'},
          {title: 'Conseils', value: 'conseils'},
          {title: 'Chirurgie Mammaire', value: 'chirurgie-mammaire'},
          {title: 'Chirurgie Silhouette', value: 'chirurgie-silhouette'},
          {title: 'Chirurgie Visage', value: 'chirurgie-visage'},
          {title: 'Médecine Esthétique', value: 'medecine-esthetique'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {author, publishedAt} = selection
      return {
        ...selection,
        subtitle: author && publishedAt
          ? `${author} • ${new Date(publishedAt).toLocaleDateString('fr-FR')}`
          : author || publishedAt,
      }
    },
  },
})

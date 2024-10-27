import { defineField, defineType } from 'sanity';

export const planetType = defineType({
  name: 'planet',
  title: 'Planet',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'rotationTime',
      title: 'Rotation Time',
      type: 'number',
    }),
    defineField({
      name: 'rotationTimeUnit',
      title: 'Rotation Time Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Days', value: 'days' },
          { title: 'Hours', value: 'hours' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'revolutionTime',
      title: 'Revolution Time',
      type: 'number',
    }),
    defineField({
      name: 'revolutionTimeUnit',
      title: 'Revolution Time Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Days', value: 'days' },
          { title: 'Years', value: 'years' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'radius',
      title: 'Radius',
      type: 'number',
    }),
    defineField({
      name: 'averageTemperature',
      title: 'Average Temperature',
      type: 'number',
    }),
    defineField({
      name: 'descriptions',
      title: 'Descriptions',
      type: 'object',
      fields: [
        {
          name: 'overviewDescription',
          title: 'Overview Description',
          type: 'text',
        },
        {
          name: 'structureDescription',
          title: 'Structure Description',
          type: 'text',
        },
        {
          name: 'surfaceDescription',
          title: 'Surface Description',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'spSize',
              title: 'SP Size',
              type: 'number',
              description: 'Size of the image for small devices (in pixels)',
            },
            {
              name: 'tabletSize',
              title: 'Tablet Size',
              type: 'number',
              description: 'Size of the image for tablet devices (in pixels)',
            },
            {
              name: 'pcSize',
              title: 'PC Size',
              type: 'number',
              description: 'Size of the image for PC devices (in pixels)',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'wikipediaLink',
      title: 'Wikipedia Link',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
  ],
});

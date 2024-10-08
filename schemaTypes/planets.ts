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
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'internalStructure',
      title: 'Internal Structure',
      type: 'text',
    }),
    defineField({
      name: 'surfaceGeology',
      title: 'Surface Geology',
      type: 'text',
    }),
  ],
});

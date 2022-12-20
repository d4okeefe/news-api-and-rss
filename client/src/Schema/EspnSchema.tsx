const EspnItemSchema = {
  title: [{ type: String, required: true }],
  description: [{ type: String, required: true }],
  enclosure: [
    {
      $: {
        url: { type: String },
        length: { type: String },
        type: { type: String },
      },
    },
  ],
  link: [{ type: String, required: true }],
  pubDate: [{ type: String, required: true }],
  guid: [
    {
      _: { type: String },
      $: {
        isPermaLink: { type: String },3
      },
    },
  ],
}

const EspnFullSchema = {
  title: { type: ['String'] },
  description: { type: ['String'] },
  link: { type: ['String'] },
  ttl: { type: ['String'] },
  language: { type: ['String'] },
  generator: { type: ['String'] },
  copyright: { type: ['String'] },
  lastBuildDate: { type: ['String'] },
  image: [
    {
      url: { type: ['String'] },
      title: { type: ['String'] },
      link: { type: ['String'] },
      width: { type: ['String'] },
      height: { type: ['String'] },
    },
  ],
  item: [
    {
      title: [{ type: String }],
      description: [{ type: String }],
      enclosure: [
        {
          $: {
            url: { type: String },
            length: { type: String },
            type: { type: String },
          },
        },
      ],
      link: [{ type: String }],
      pubDate: [{ type: String }],
      guid: [
        {
          _: { type: String },
          $: {
            isPermaLink: { type: String },
          },
        },
      ],
    },
  ],
}
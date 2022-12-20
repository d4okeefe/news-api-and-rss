const mongoose = require('mongoose')

const NewsEspnSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('NewsEspn', NewsEspnSchema)

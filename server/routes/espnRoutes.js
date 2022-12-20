/**
 * THE PLAN:
 *
 * 1. When client calls for info, server sends json.data from mongodb
 * 2. Meanwhile, server compares rss feed to mongo and ...
 *    a. sends new info to client
 *    b. updates mongodb
 *
 */

var router = global.router
const axios = require('axios')
const mongo_uri =
  'mongodb+srv://d4okeefe:U2q9sx6vdvzE7n_@cluster0.jdy6d.gcp.mongodb.net/?retryWrites=true&w=majority'
const { MongoClient } = require('mongodb')

const espn_addresses = [
  {
    title: 'mlb',
    api_route: '/api/espn/mlb',
    url_ext: 'mlb/news',
  },
  {
    title: 'f1',
    api_route: '/api/espn/f1',
    url_ext: 'f1/news',
  },
  {
    title: 'nba',
    api_route: '/api/espn/nba',
    url_ext: 'nba/news',
  },
  {
    title: 'tennis',
    api_route: '/api/espn/tennis',
    url_ext: 'tennis/news',
  },
  {
    title: 'soccer',
    api_route: '/api/espn/soccer',
    url_ext: 'soccer/news',
  },
  {
    title: 'nfl',
    api_route: '/api/espn/nfl',
    url_ext: 'nfl/news',
  },
]

const axios_espn = axios.create({
  baseURL: `https://www.espn.com/espn/rss/`,
  timeout: 30000,
})

const getMongoDbData = (res, client, itm) => {
  client.connect((err) => {
    const collection = client.db('news_data').collection('espn')
    collection.find({ topic: itm.title }).toArray(function (err, results) {
      res.json(results)
    })
  })
}

const updateMongoDbWithRssData = async (res, client, itm) => {
  // console.log('RUNNING UPDATE !!!')

  const itm_title = itm.title
  await axios_espn.get(itm.url_ext).then((response) => {
    var parseString = require('xml2js').parseString

    parseString(response.data, { trim: true }, function (err, result) {
      const extractedData = result['rss']['channel'][0]

      const espn_data = []

      // console.log('count: ' + extractedData.item.length)

      extractedData.item.forEach((v) => {
        let d = new Object()
        d.source = 'espn'
        d.topic = itm_title
        d.title = v.title ? v.title[0] : ''
        d.description = v.description ? v.description[0] : ''
        d.image_link = v.enclosure ? v.enclosure[0].$.url : ''
        d.link = v.link ? v.link[0] : ''
        d.pubDate = v.pubDate ? v.pubDate[0] : ''
        d.dateCollected = new Date()
        d._id = v.guid ? v.guid[0]?._ : ''
        espn_data.push(d)
      })

      // espn_data.forEach((r, i) => console.log(i + ': ' + r._id))

      client.connect((err) => {
        const collection = client.db('news_data').collection('espn')
        const collection2 = client.db('news_data').collection('espn')
        espn_data.forEach((r) => {
          // console.log(r.title)
          var key = { _id: r._id }
          var data = { $setOnInsert: { ...r } }
          collection.updateOne(key, data, { upsert: true })
        })
        collection2.find({ topic: itm_title }).toArray(function (err, results) {
          res.json(results)
        })
      })
      // res.json(espn_data)
    })
  })
}

// cycles through espn_addresses & creates a route for each one
espn_addresses.forEach((itm, idx) => {
  router.get(itm.api_route, async (req, res) => {
    const client = await new MongoClient(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // getMongoDbData(res, client, itm)

    updateMongoDbWithRssData(res, client, itm)
  })
})

module.exports = router

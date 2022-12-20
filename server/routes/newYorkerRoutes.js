var router = global.router
const axios = require('axios')
const mongo_uri =
  'mongodb+srv://d4okeefe:U2q9sx6vdvzE7n_@cluster0.jdy6d.gcp.mongodb.net/?retryWrites=true&w=majority'
const { MongoClient } = require('mongodb')

const new_yorker_addresses = [
  {
    title: 'everything',
    api_route: '/api/new-yorker/everything',
    url_ext: 'everything',
  },
  {
    title: 'news',
    api_route: '/api/new-yorker/news',
    url_ext: 'news',
  },
  {
    title: 'webposts',
    api_route: '/api/new-yorker/webposts',
    url_ext: 'posts',
  },
  {
    title: 'daily_comment',
    api_route: '/api/new-yorker/news/daily-comment',
    url_ext: 'news/daily-comment',
  },
  {
    title: 'news_desk',
    api_route: '/api/new-yorker/news/news-desk',
    url_ext: 'news/news-desk',
  },
  {
    title: 'amy_davidson',
    api_route: '/api/new-yorker/amy-davidson',
    url_ext: 'news/amy-davidson',
  },
  {
    title: 'john_cassidy',
    api_route: '/api/new-yorker/john-cassidy',
    url_ext: 'news/john-cassidy',
  },
  {
    title: 'culture',
    api_route: '/api/new-yorker/culture',
    url_ext: 'culture',
  },
  {
    title: 'humor',
    api_route: '/api/new-yorker/humor',
    url_ext: 'humor',
  },
  {
    title: 'tech',
    api_route: '/api/new-yorker/tech',
    url_ext: 'tech',
  },
  {
    title: 'sports',
    api_route: '/api/new-yorker/sports',
    url_ext: 'news/sporting-scene',
  },
]

const axios_new_yorker = axios.create({
  baseURL: `https://www.newyorker.com/feed/`,
  timeout: 30000,
})

const getMongoDbData = (res, client, itm) => {
  client.connect((err) => {
    const collection = client.db('news_data').collection('new_yorker')
    collection.find({ topic: itm.title }).toArray(function (err, results) {
      res.json(results)
    })
  })
}

const updateMongoDbWithRssData = async (res, client, itm) => {
  // console.log('RUNNING UPDATE !!!')

  const itm_title = itm.title
  await axios_new_yorker.get(itm.url_ext).then((response) => {
    var parseString = require('xml2js').parseString

    parseString(response.data, { trim: true }, function (err, result) {
      const extractedData = result['rss']['channel'][0]

      const new_yorker_data = []

      // console.log('count: ' + extractedData.item.length)

      extractedData.item.forEach((v) => {
        let d = new Object()
        d.source = 'New Yorker'
        d.topic = itm_title
        d.dateCollected = new Date()

        d.title = v.title ? v.title[0] : ''
        d.link = v.link ? v.link[0] : ''
        d._id = v.guid ? v.guid[0]?._ : ''
        d.pubDate = v.pubDate ? v.pubDate[0] : ''
        // d.media_content = v['media:content'] ? v['media:content'][0] : ''
        d.description = v.description ? v.description[0] : ''
        d.category = v.category ? v.category : ''
        d.media_keywords = v['media:keywords']
          ? v['media:keywords'][0].split(',').map((e) => e.trim())
          : ''
        d.byline = v['dc:creator'] ? v['dc:creator'][0] : ''
        d.publisher = v['dc:publisher'] ? v['dc:publisher'][0] : ''
        d.image_link = v['media:thumbnail'] ? v['media:thumbnail'][0].$.url : ''
        new_yorker_data.push(d)
      })

      client.connect((err) => {
        const collection = client.db('news_data').collection('new_yorker')
        const collection2 = client.db('news_data').collection('new_yorker')
        new_yorker_data.forEach((r) => {
          // console.log(r.title)
          var key = { _id: r._id }
          var data = { $setOnInsert: { ...r } }
          collection.updateOne(key, data, { upsert: true })
        })
        collection2.find({ topic: itm_title }).toArray(function (err, results) {
          res.json(results)
        })
      })
      // res.json(new_yorker_data)
    })
  })
}

new_yorker_addresses.forEach((itm, idx) => {
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

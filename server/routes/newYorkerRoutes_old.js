var router = global.router
const axios = require('axios')

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

new_yorker_addresses.forEach((itm, idx) => {
  router.get(itm.api_route, async (req, res) => {
    await axios_new_yorker
      .get(itm.url_ext)
      .then((response) => {
        var parseString = require('xml2js').parseString
        parseString(response.data, function (err, result) {
          const extractedData = result['rss']['channel'][0]
          // console.log(extractedData)
          res.json(extractedData)
        })
      })
      .catch((err) => console.log(err))
  })
})

module.exports = router

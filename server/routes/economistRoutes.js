var router = global.router
const axios = require('axios')

const axios_economist = axios.create({
  baseURL: `https://www.economist.com/`,
  timeout: 30000,
})

const economist_addresses = [
  {
    title: 'the-world-this-week',
    api_route: '/api/the-world-this-week',
    url_ext: 'the-world-this-week/rss.xml',
  },
]

economist_addresses.forEach((itm, idx) => {
  router.get(itm.api_route, async (req, res) => {
    await axios_economist
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

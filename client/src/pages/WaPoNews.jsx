import { Suspense, useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../utils/NewsCard'
import Row from 'react-bootstrap/Row'
import { format } from 'date-fns'

const parseDate = function (d) {
  try {
    let date = new Date(d)
    return format(date, 'd MMM yyyy')
  } catch {
    return d
  }
}

export default function WaPoNews(props) {
  const [data, setData] = useState(null)

  const wa_po_url = props.url

  useEffect(() => {
    fetch(wa_po_url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.item)
      })
  }, [])

  return (
    <div className="container">
      <h4 className="title-header">{props.title}</h4>
      <Suspense fallback={<h1>Loading ... </h1>}>
        <Row xs={1} md={1} lg={2}>
          {data &&
            data
              // .filter((r, i) => r['dc:creator'][0] !== `Amy B Wang`)
              .filter(
                (r, index, arr) =>
                  arr.findIndex((r2) => r.title[0] === r2.title[0]) === index,
              )
              .map((r, index) => (
                <Col key={index}>
                  <NewsCard
                    image_url={
                      r['media:thumbnail'] && r['media:thumbnail'][0].$.url
                    }
                    image_caption=""
                    url={r.link}
                    title={r.title}
                    description={r.description}
                    byline={r['dc:creator']}
                    date={parseDate(r.pubDate)}
                  />
                </Col>
              ))}
        </Row>
      </Suspense>
    </div>
  )
}

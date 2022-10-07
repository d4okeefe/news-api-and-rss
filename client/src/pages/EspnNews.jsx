import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../utils/NewsCard'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { format } from 'date-fns'

const parseDate = function (d) {
  try {
    let date = new Date(d)
    return format(date, 'd MMM yyyy')
  } catch {
    return d
  }
}

export default function EspnNews(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.item)
      })
  }, [])

  return (
    <div className="container">
      <h4 className="title-header">{props.title}</h4>
      <Row xs={1} md={1} lg={2}>
        {!data ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          data
            .filter(
              (r, index, arr) =>
                arr.findIndex((r2) => r.title[0] === r2.title[0]) === index,
            )
            .map((r, index) => (
              <Col key={index}>
                <NewsCard
                  image_url={r.enclosure && r.enclosure[0].$.url}
                  image_caption=""
                  url={r.link}
                  title={r.title}
                  description={
                    r.description[0].trim() !== 'Read more' ? r.description : ''
                  }
                  byline={r['dc:creator']}
                  date={parseDate(r.pubDate)}
                />
              </Col>
            ))
        )}
      </Row>
    </div>
  )
}

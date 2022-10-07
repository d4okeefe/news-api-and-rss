import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../utils/NewsCard'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { format } from 'date-fns'

const parseDate = function (d) {
  let date = new Date(d)
  return format(date, 'd MMM yyyy')
}

export default function NewYorkerRss(props) {
  const [data, setData] = useState(null)

  const nyer_url = props.url

  useEffect(() => {
    fetch(nyer_url)
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
            .filter((r) => {
              return !(r.title[0].trim() === '')
            })
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
            ))
        )}
      </Row>
    </div>
  )
}

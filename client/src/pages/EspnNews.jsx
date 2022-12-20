import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../components/NewsCard'
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
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
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
            // filter out duplicates
            // .filter(
            //   (r, index, arr) =>
            //     arr.findIndex((r2) => r.title[0] === r2.title[0]) === index,
            // )
            // sort by date, descending: subtract 2nd from 1st
            .sort(
              (a, b) =>
                Date.parse(new Date(b.pubDate)) -
                Date.parse(new Date(a.pubDate)),
            )
            // only first 10 records
            // .slice(0, 10)
            // Espn Rss does not provide author
            .map((r) => (
              <Col key={r._id}>
                <NewsCard
                  title={r.title}
                  description={r.description}
                  image_url={r.image_link}
                  url={r.link}
                  date={parseDate(r.pubDate)}
                />
              </Col>
            ))
        )}
      </Row>
    </div>
  )
}

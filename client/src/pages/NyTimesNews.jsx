import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../utils/NewsCard'
import Row from 'react-bootstrap/Row'
import { format_date } from '../utils/FormatDate'

export default function NyTimesNews(props) {
  const [data, setData] = useState([])

  const nyt_url = props.url

  useEffect(() => {
    fetch(nyt_url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="container NyTimesTable">
      <h4 className="title-header">{props.title}</h4>
      <Row xs={1} md={1} lg={2}>
        {!data
          ? 'Loading ...'
          : data.map((r, index) => (
              <Col key={index}>
                <NewsCard
                  image_url={r.multimedia && r.multimedia[0].url}
                  image_caption={r.multimedia && r.multimedia[0].caption}
                  url={r.url && r.url}
                  title={r.title}
                  description={r.abstract}
                  byline={r.byline}
                  date={format_date(r.published_date)}
                />
              </Col>
            ))}
      </Row>
    </div>
  )
}

// import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../components/NewsCard'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { format } from 'date-fns'

// import Form from 'react-bootstrap/Form'





const parseDate = function (d) {
  let date = new Date(d)
  return format(date, 'd MMM yyyy')
}

export default function NewYorkerRss(props) {
  // const [data, setData] = useState([])
  // const keywords = setKeywords()

  // useEffect(() => {
  //   fetch(props.url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])

  // function setKeywords() {
  //   let kw = []
  //   data.forEach((r) => {
  //     kw.push(...r.media_keywords)
  //   })
  //   kw = [...new Set(kw)]
  //   kw.sort()
  //   return kw
  // }

  return (
    <div className="container">
      {/* <p className="card-text d-flex justify-content">
        <h6 className="title-header">{props.title}</h6>
        <Form.Select aria-label="Default select example" margin="30px">
          {!keywords ? (
            <Spinner animation="border" role="status" size="lg">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            keywords.map((r) => <option>{r}</option>)
          )}
        </Form.Select>
      </p> */}

      <Row xs={1} md={1} lg={2}>
        {!props.mongodata ? (
          <Spinner animation="border" role="status" size="lg">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          props.mongodata
            .sort(
              (a, b) =>
                Date.parse(new Date(b.pubDate)) -
                Date.parse(new Date(a.pubDate)),
            )
            .map((r) => (
              <Col key={r._id}>
                <NewsCard
                  title={r.title}
                  description={r.description}
                  image_url={r.image_link}
                  url={r.link}
                  byline={r.byline}
                  date={parseDate(r.pubDate)}
                />
              </Col>
            ))
        )}
      </Row>

      {/* <Row xs={1} md={1} lg={2}>
        {!data ? (
          <Spinner animation="border" role="status" size="lg">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          data
            .sort(
              (a, b) =>
                Date.parse(new Date(b.pubDate)) -
                Date.parse(new Date(a.pubDate)),
            )
            .map((r) => (
              <Col key={r._id}>
                <NewsCard
                  title={r.title}
                  description={r.description}
                  image_url={r.image_link}
                  url={r.link}
                  byline={r.byline}
                  date={parseDate(r.pubDate)}
                />
              </Col>
            ))
        )}
      </Row> */}
    </div>
  )
}

import { Route, Router } from 'wouter'
import { useEffect, useState } from 'react'

import EspnNews from '../pages/EspnNews'
import NewYorkerRss from '../pages/NewYorkerRss'
import NyTimesNews from '../pages/NyTimesNews'
import ScientificAmericanRss from '../pages/ScientificAmericanRss'
import WaPoNews from '../pages/WaPoNews'
import WiredRss from '../pages/WiredRss'

export default function Routes(props) {
  const [data, setData] = useState([])
  // const [routeUrl, setRouteUrl] = useState('')
  const staticUrl = '/api/new-yorker/news'

  // setRouteUrl(props.path)

  useEffect(() => {
    fetch(staticUrl)
      .then((res) => res)
      .then((data) => {
        setData(JSON.parse(data))
      })
  }, [])

  let key_num = 0

  return (
    <Router>
      <Route key={key_num++} path="/">
        <NyTimesNews
          title="New York Times Top Stories"
          url="/api/new-york-times/topstories"
        />
      </Route>
      {props.espn.sections.map((r, i) => (
        <Route key={key_num++} path={r.url}>
          <EspnNews title={r.long_title} url={'/api' + r.url} />
        </Route>
      ))}
      {props.nyer.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <NewYorkerRss
              title={r.long_title}
              url={'/api' + r.url}
              mongodata={data}
            />
          </Route>
        </>
      ))}
      {props.nyt.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <NyTimesNews title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {props.sciam.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <ScientificAmericanRss title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {props.wapo.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <WaPoNews title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {props.wired.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <WiredRss title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
    </Router>
  )
}

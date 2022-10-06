import {
  EspnData,
  NyerData,
  NytData,
  SciAmData,
  WapoData,
  WiredData,
} from '../Data/NewsData'
import { Redirect, Route, Router } from 'wouter'

import EspnNews from '../pages/EspnNews'
import NewYorkerRss from '../pages/NewYorkerRss'
import NyTimesNews from '../pages/NyTimesNews'
import ScientificAmericanRss from '../pages/ScientificAmericanRss'
import { Suspense } from 'react'
import WaPoNews from '../pages/WaPoNews'
import WiredRss from '../pages/WiredRss'

export default () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Router>
        {NytData.nyt_routes.map((r, i) => (
          <Route key={i} path={r.url}>
            <NyTimesNews title={r.title} url={'/api' + r.url} />
          </Route>
        ))}
        {WapoData.wapo_routes.map((r, i) => (
          <>
            <Route key={i} path={r.url}>
              <WaPoNews title={r.title} url={'/api' + r.url} />
            </Route>
          </>
        ))}
        {NyerData.nyer_routes.map((r, i) => (
          <>
            <Route key={i} path={r.url}>
              <NewYorkerRss title={r.title} url={'/api' + r.url} />
            </Route>
          </>
        ))}
        {EspnData.espn_routes.map((r, i) => (
          <>
            <Route key={i} path={r.url}>
              <EspnNews title={r.title} url={'/api' + r.url} />
            </Route>
          </>
        ))}
        {WiredData.wired_routes.map((r, i) => (
          <>
            <Route key={i} path={r.url}>
              <WiredRss title={r.title} url={'/api' + r.url} />
            </Route>
          </>
        ))}
        {SciAmData.sciam_routes.map((r, i) => (
          <>
            <Route key={i} path={r.url}>
              <ScientificAmericanRss title={r.title} url={'/api' + r.url} />
            </Route>
          </>
        ))}
      </Router>
    </Suspense>
  )
}

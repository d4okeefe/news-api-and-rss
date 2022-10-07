import { Route, Router } from 'wouter'

import { EspnData } from '../Data/EspnData'
import EspnNews from '../pages/EspnNews'
import NewYorkerRss from '../pages/NewYorkerRss'
import NyTimesNews from '../pages/NyTimesNews'
import { NyerData } from '../Data/NyerData'
import { NytData } from '../Data/NytData'
import { SciAmData } from '../Data/SciAmData'
import ScientificAmericanRss from '../pages/ScientificAmericanRss'
import WaPoNews from '../pages/WaPoNews'
import { WapoData } from '../Data/WapoData'
import { WiredData } from '../Data/WiredData'
import WiredRss from '../pages/WiredRss'

export default function Routes() {
  let key_num = 0

  return (
    <Router>
      <Route key={key_num++} path="/">
        <NyTimesNews
          title="New York Times Top Stories"
          url="/api/new-york-times/topstories"
        />
      </Route>
      {EspnData.sections.map((r, i) => (
        <Route key={key_num++} path={r.url}>
          <EspnNews title={r.long_title} url={'/api' + r.url} />
        </Route>
      ))}
      {NyerData.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <NewYorkerRss title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {NytData.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <NyTimesNews title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {SciAmData.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <ScientificAmericanRss title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {WapoData.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <WaPoNews title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {WiredData.sections.map((r, i) => (
        <>
          <Route key={key_num++} path={r.url}>
            <WiredRss title={r.long_title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
    </Router>
  )
}

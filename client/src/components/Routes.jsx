import { Redirect, Route, Router } from 'wouter'

import EspnNews from '../pages/EspnNews'
import NyTimesNews from '../pages/NyTimesNews'
import WaPoNews from '../pages/WaPoNews'

const wapo_routes = [
  {
    title: 'Washington Post Politics',
    url: '/washington-post/politics',
  },
  {
    title: 'Washington Post Opinions',
    url: '/washington-post/opinions',
  },
  {
    title: 'Washington Post Local News',
    url: '/washington-post/local',
  },
  {
    title: 'Washington Post Sports',
    url: '/washington-post/sports',
  },
  {
    title: 'Washington Post Technology',
    url: '/washington-post/business/technology',
  },
  {
    title: 'Washington Post National News',
    url: '/washington-post/national',
  },
  {
    title: 'Washington Post World News',
    url: '/washington-post/world',
  },
  {
    title: 'Washington Post Business',
    url: '/washington-post/business',
  },
  {
    title: 'Washington Post Lifestyle',
    url: '/washington-post/lifestyle',
  },
  {
    title: 'Washington Post Entertainment',
    url: '/washington-post/entertainment',
  },
]

const nyt_routes = [
  {
    title: 'New York Times Top Stories',
    url: '/new-york-times/topstories',
  },
  {
    title: 'New York Times Opinions',
    url: '/new-york-times/topstories/opinions',
  },
  {
    title: 'New York Times Science',
    url: '/new-york-times/topstories/science',
  },
  {
    title: 'New York Times Sports',
    url: '/new-york-times/topstories/sports',
  },
  {
    title: 'New York Times World News',
    url: '/new-york-times/topstories/world',
  },
  {
    title: 'New York Times Books',
    url: '/new-york-times/topstories/books',
  },
  // Add Movies & F1 Later
]

const espn_routes = [
  { title: 'Espn MLB', url: '/espn/mlb' },
  { title: 'Espn NFL', url: '/espn/nfl' },
  { title: 'Espn NBA', url: '/espn/nba' },
  { title: 'Espn Soccer', url: '/espn/soccer' },
  { title: 'Espn Tennis', url: '/espn/tennis' },
  { title: 'Espn f1', url: '/espn/f1' },
]

const nyer_routes = [
  {
    title: 'New Yorker Everything',
    url: '/new-yorker/everything',
  },
  {
    title: 'New Yorker News',
    url: '/new-yorker/news',
  },
  {
    title: 'New Yorker Webposts',
    url: '/new-yorker/webposts',
  },
  {
    title: 'New Yorker Daily Comment',
    url: '/new-yorker/news/daily-comment',
  },
  {
    title: 'New Yorker News Desk',
    url: '/new-yorker/news/news-desk',
  },
  {
    title: 'New Yorker - Amy Davidson',
    url: '/new-yorker/amy-davidson',
  },
  {
    title: 'New Yorker - John Cassidy',
    url: '/new-yorker/john-cassidy',
  },
  {
    title: 'New Yorker Culture',
    url: '/new-yorker/culture',
  },
  {
    title: 'New Yorker Humor',
    url: '/new-yorker/humor',
  },
  {
    title: 'New Yorker Tech',
    url: '/new-yorker/tech',
  },
  {
    title: 'New Yorker Sports',
    url: '/new-yorker/sports',
  },
]

const wired_routes = [
  {
    title: 'Wired Business',
    url: '/wired/business',
  },
  {
    title: 'Wired Culture',
    url: '/wired/culture',
  },
  {
    title: 'Wired Science',
    url: '/wired/science',
  },
  {
    title: 'Wired Gear',
    url: '/wired/gear',
  },
  {
    title: 'Wired Ideas',
    url: '/wired/ideas',
  },
  {
    title: 'Wired AI',
    url: '/wired/ai',
  },
  {
    title: 'Wired Security',
    url: '/wired/security',
  },
  {
    title: 'Wired Backchannel',
    url: '/wired/backchannel',
  },
  {
    title: 'Wired Guide',
    url: '/wired/wired-guide',
  },
]

export default () => {
  return (
    <Router>
      {/* <Redirect href="/new-york-times/topstories" /> */}
      {nyt_routes.map((r, i) => (
        <Route key={i} path={r.url}>
          <NyTimesNews title={r.title} url={'/api' + r.url} />
        </Route>
      ))}
      {wapo_routes.map((r, i) => (
        <>
          <Route key={i} path={r.url}>
            <WaPoNews title={r.title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {nyer_routes.map((r, i) => (
        <>
          <Route key={i} path={r.url}>
            <WaPoNews title={r.title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {espn_routes.map((r, i) => (
        <>
          <Route key={i} path={r.url}>
            <EspnNews title={r.title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
      {wired_routes.map((r, i) => (
        <>
          <Route key={i} path={r.url}>
            <EspnNews title={r.title} url={'/api' + r.url} />
          </Route>
        </>
      ))}
    </Router>
  )
}

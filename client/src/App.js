import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NewsNavDropDown from './utils/NewsNavDropDown'
import Routes from './components/Routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>News links</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NewsNavDropDown
                  title="New York Times"
                  items={[
                    {
                      link: '/new-york-times/topstories',
                      title: 'Top Stories',
                    },
                    {
                      link: '/new-york-times/topstories/opinions',
                      title: 'Opinions',
                    },
                    {
                      link: '/new-york-times/topstories/science',
                      title: 'Science',
                    },
                    {
                      link: '/new-york-times/topstories/sports',
                      title: 'Sports',
                    },

                    {
                      link: '/new-york-times/topstories/world',
                      title: 'World',
                    },
                    {
                      link: '/new-york-times/topstories/books',
                      title: 'Books',
                    },
                  ]}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title="Washington Post"
                  items={[
                    { link: '/washington-post/politics', title: 'Politics' },
                    { link: '/washington-post/opinions', title: 'Opinions' },
                    { link: '/washington-post/local', title: 'Local' },
                    { link: '/washington-post/sports', title: 'Sports' },

                    {
                      link: '/washington-post/business/technology',
                      title: 'Technology',
                    },
                    { link: '/washington-post/national', title: 'National' },
                    { link: '/washington-post/world', title: 'World' },
                    { link: '/washington-post/business', title: 'Business' },
                    { link: '/washington-post/lifestyle', title: 'Lifestyle' },
                    {
                      link: '/washington-post/entertainment',
                      title: 'Entertainment',
                    },
                  ]}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title="New Yorker"
                  items={[
                    { link: '/new-yorker/everything', title: 'Everything' },
                    { link: '/new-yorker/news', title: 'News' },
                    {
                      link: '/new-yorker/news/daily-comment',
                      title: 'Daily Comment',
                    },
                    { link: '/new-yorker/news/news-desk', title: 'News Desk' },

                    // {
                    //   link: '/new-yorker/amy-davidson',
                    //   title: 'Amy Davidson',
                    // },
                    // { link: '/new-yorker/john-cassidy', title: 'John Cassidy' },
                    { link: '/new-yorker/culture', title: 'Culture' },
                    { link: '/new-yorker/humor', title: 'Humor' },
                    { link: '/new-yorker/tech', title: 'Tech' },
                    {
                      link: '/new-yorker/sports',
                      title: 'Sports',
                    },
                  ]}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title="Espn"
                  items={[
                    { link: '/espn/mlb', title: 'MLB' },
                    { link: '/espn/f1', title: 'F1' },
                    { link: '/espn/nba', title: 'NBA' },
                    { link: '/espn/tennis', title: 'Tennis' },
                    { link: '/espn/soccer', title: 'Soccer' },
                    { link: '/new-yorker/nfl', title: 'NFL' },
                  ]}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title="Wired.com"
                  items={[
                    {
                      link: '/wired/business',
                      title: 'Business',
                    },
                    {
                      link: '/wired/culture',
                      title: 'Culture',
                    },
                    {
                      link: '/wired/science',
                      title: 'Science',
                    },
                    {
                      link: '/wired/gear',
                      title: 'Gear',
                    },

                    {
                      link: '/wired/ideas',
                      title: 'Ideas',
                    },
                    {
                      link: '/wired/ai',
                      title: 'AI',
                    },
                    {
                      link: '/wired/security',
                      title: 'Security',
                    },
                    {
                      link: '/wired/backchannel',
                      title: 'Backchannel',
                    },
                    {
                      link: '/wired/wired-guide',
                      title: 'Wired Guide',
                    },
                  ]}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
        <Routes />
      </body>
    </div>
  )
}

export default App

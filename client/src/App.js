import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import { EspnData } from './Data/EspnData'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NewsNavDropdown from './components/NewsNavDropdown'
import { NyerData } from './Data/NyerData'
import { NytData } from './Data/NytData'
import Routes from './components/Routes'
import { SciAmData } from './Data/SciAmData'
import { WapoData } from './Data/WapoData'
import { WiredData } from './Data/WiredData'
import { v4 as uuidv4 } from 'uuid'

// import { useTracking } from 'react-tracking'

function App() {
  function handleClick() {
    console.log('TESTING handleClick() !!!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>News links</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" onSelect={() => handleClick()}>
                <NewsNavDropdown
                  key={uuidv4()}
                  newspaper_title={NytData.newspaper_title}
                  sections={NytData.sections}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropdown
                  key={uuidv4()}
                  newspaper_title={WapoData.newspaper_title}
                  sections={WapoData.sections}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropdown
                  key={uuidv4()}
                  newspaper_title={NyerData.newspaper_title}
                  sections={NyerData.sections}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropdown
                  key={uuidv4()}
                  newspaper_title={EspnData.newspaper_title}
                  sections={EspnData.sections}
                />
              </Nav>
              <Nav className="me-auto" onSelect={handleClick}>
                <NewsNavDropdown
                  key={uuidv4()}
                  newspaper_title={WiredData.newspaper_title}
                  sections={WiredData.sections}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropdown
                  key={uuidv4()}
                  newspaper_title={SciAmData.newspaper_title}
                  sections={SciAmData.sections}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div>
        <Routes
          espn={EspnData}
          nyer={NyerData}
          nyt={NytData}
          sciam={SciAmData}
          wapo={WapoData}
          wired={WiredData}
        />
      </div>
    </div>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  EspnData,
  NyerData,
  NytData,
  SciAmData,
  WiredData,
} from './Data/NewsData'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NewsNavDropDown from './utils/NewsNavDropDown'
import NewsNavDropdown2 from './utils/NewsNavDropDown2'
import Routes from './components/Routes'
import { WapoData } from './Data/WapoData'

// import { useTracking } from 'react-tracking'

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
                  title={NytData.newsdropdown.title}
                  items={NytData.newsdropdown.items}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropdown2
                  newspaper_title={WapoData.newspaper_title}
                  sections={WapoData.sections}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title={NyerData.newsdropdown.title}
                  items={NyerData.newsdropdown.items}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title={EspnData.newsdropdown.title}
                  items={EspnData.newsdropdown.items}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title={WiredData.newsdropdown.title}
                  items={WiredData.newsdropdown.items}
                />
              </Nav>
              <Nav className="me-auto">
                <NewsNavDropDown
                  title={SciAmData.newsdropdown.title}
                  items={SciAmData.newsdropdown.items}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div>
        <Routes />
      </div>
    </div>
  )
}

export default App

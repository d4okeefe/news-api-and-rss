import { Link } from 'wouter'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NewsNavDropdownProps = {
  title: '',
  items: [],
}

/**
 *
 * @param {NewsNavDropdownProps} props
 */
export default (props) => {
  return (
    <NavDropdown id="basic-nav-dropdown" title={props.title}>
      {props.items.map((r, index) => (
        <>
          <NavDropdown.Item key={index}>
            <Link href={r.link}>{r.title}</Link>
          </NavDropdown.Item>
          {index % 3 === 2 && index + 1 !== props.items.length && (
            <NavDropdown.Divider></NavDropdown.Divider>
          )}
        </>
      ))}
    </NavDropdown>
  )
}

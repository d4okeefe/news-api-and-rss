import { Link } from 'wouter'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NewsNavDropdownProps2 = {
  newspaper_title: '',
  sections: [],
}

/**
 *
 * @param {NewsNavDropdownProps2} props
 */
export default function NewsNavDropdown2(props) {
  return (
    <NavDropdown id="basic-nav-dropdown" title={props.newspaper_title}>
      {props.sections.map((r, i) => (
        <>
          <NavDropdown.Item key={i}>
            <Link href={r.url}>{r.short_title}</Link>
          </NavDropdown.Item>
          {i % 3 === 2 && i + 1 !== props.sections.length && (
            <NavDropdown.Divider></NavDropdown.Divider>
          )}
        </>
      ))}
    </NavDropdown>
  )
}

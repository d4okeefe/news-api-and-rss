import { Link } from 'wouter'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { v4 as uuidv4 } from 'uuid'

// const NewsNavDropdownProps = {
//   newspaper_title: '',
//   sections: [],
//   onClick(): function,
// }


/**
 *
 * @param {NewsNavDropdownProps} props
 */
export default function NewsNavDropdown(props) {
  return (
    <NavDropdown
      key={uuidv4()}
      id="basic-nav-dropdown"
      title={props.newspaper_title}
    >
      {props.sections.map((r, i) => (
        <>
          <NavDropdown.Item key={uuidv4()}>
            <Link href={r.url} eventKey={r.short}>
              {r.short_title}
            </Link>
          </NavDropdown.Item>
          {i % 3 === 2 && i + 1 !== props.sections.length && (
            <NavDropdown.Divider></NavDropdown.Divider>
          )}
        </>
      ))}
    </NavDropdown>
  )
}

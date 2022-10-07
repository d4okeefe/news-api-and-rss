import { Link } from 'wouter'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NewsNavDropdownProps = {
  newspaper_title: '',
  sections: [],
}

/**
 *
 * @param {NewsNavDropdownProps} props
 */
export default function NewsNavDropdown(props) {
  let key_num_newsnavdropdown = 0
  let key_num_newsnavdropdown_item = 0

  return (
    <NavDropdown
      key={key_num_newsnavdropdown++}
      id="basic-nav-dropdown"
      title={props.newspaper_title}
    >
      {props.sections.map((r, i) => (
        <>
          <NavDropdown.Item key={key_num_newsnavdropdown_item++}>
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

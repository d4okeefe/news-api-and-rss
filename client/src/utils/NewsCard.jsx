import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const NewsCardProps = {
  image_url: '',
  image_caption: '',
  url: '',
  title: '',
  description: '',
  byline: '',
  date: '',
}

/**
 *
 * @param {NewsCardProps} props
 */
export default function NewsCard(props) {
  return (
    <Card className="card text-white bg-dark mb-3 newsCard">
      <Image
        className="card-img-top"
        src={props.image_url}
        title={props.image_caption}
      ></Image>
      <div className="card-body">
        <a
          className="link-info card-link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="card-title">{props.title}</h5>
        </a>
        <p className="card-text" align="justify">
          {props.description}
        </p>
        <p className="card-text d-flex justify-content-between">
          <span>{props.byline}</span>
          <span>{props.date}</span>
        </p>
      </div>
    </Card>
  )
}

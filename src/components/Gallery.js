import React, {Fragment} from 'react'
import NoImages from './NoImages'
import Image from './Image'
const Gallery = (props) => {
  const images = props.data
  if (images.length > 0) {
    return (
      <Fragment>
        <ul>
          {images.map(({id, farm, server, secret, title}) => {
            const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`
            return (
              <li key={id}>
                <Image url={url} alt={title} />
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <NoImages />
    </Fragment>
  )
}

export default Gallery

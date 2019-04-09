import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div class="jumbotron">
      <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} />
      <h3 class="display-4">{data.name}</h3>
      <p class="lead">{data.title}</p>
      <hr class="my-4" />
      <p>{data.shortBio.shortBio}</p>
  </div>
)

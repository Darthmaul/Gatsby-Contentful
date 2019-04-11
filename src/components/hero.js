import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  // Main jumbotron for a primary marketing message or call to action
    <div class="jumbotron vertical-center home-section">
        <div class="container">
            <h1>Welcome to the Virtual Team Toolbox</h1>
            <h2>Helping teams <u>work</u></h2>
            <p><a class="btn btn-success btn-lg" href="toolbox.html">Get Started &raquo;</a></p>
        </div>
    </div>
)

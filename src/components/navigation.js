import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav class="navbar navbar-expand-md fixed-top">
      <div class="container">
          <Link to="/" className="navbar-brand">Virtual Team Toolbox</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                      <Link to="#" className="nav-link">About</Link>
                  </li>
                  <li class="nav-item">
                      <Link to="#" className="nav-link">Contribute</Link>
                  </li>
                  <li class="nav-item">
                      <Link to="/toolbox" className="btn btn-warning">Toolbox</Link>

                  </li>
                  
            
              </ul>
          </div>
      </div>
  </nav>

)
